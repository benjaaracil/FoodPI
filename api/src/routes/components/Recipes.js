const express = require ("express");
const router = express.Router();
//Me traigo las funciones que se encargan de cierta lógica "compleja"
const {mapping, filter, normalizationWithoutID} = require ("./Logic Functions/Functions")
//Me traigo Fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//Me traigo las tablas de la DB
const {Recipe, Diet} = require("../../db.js");
//Me traigo los operadores de sequelize
const { Op } = require ("sequelize");
//Me traigo la Api Key
require('dotenv').config();
const {APP_API_KEY} = process.env;

//Endpoint de prueba para ver si funca la pagina:
// router.get("/", (req,res) => {
//     res.send("Hola Mundo")
// })
router.get("/", async (req,res) => {
    //Evaluo si me llega algo por query y en caso de que si, si me coincide el name con algo de la api o mi db.
    if (req.query.name){
        const {name} = req.query
        try{
            //Consulta a la Api
            let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_API_KEY}&titleMatch=${name}&&addRecipeInformation=true&number=100`)
            let ApiRes = await response.json();

            //Consulta a mi DB
            let LocalRes = await Recipe.findAll({
                where:{
                    title: {
                        [Op.eq]: name
                    }
                },
                include: {
                    model: Diet
                }
            })
            // console.log(LocalRes)
            // console.log(LocalRes.length === 0);
            // console.log(ApiRes.totalResults === 0);
            //mapeo para devolver los datos que se necesitan
            ApiRes = mapping(ApiRes);
            LocalRes = normalizationWithoutID(LocalRes);
            
            if (ApiRes.length === 0 && LocalRes.length === 0){
                return res.status(404).send("No se ha encontrado dicha receta")
            }
            else {
                res.status(200).json([...ApiRes, ...LocalRes]);
            }

        }
        catch(error){
                res.status(404).send(error)
            }
    } else {
        try{
            //ApiRes contiene los datos de la Api
            let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_API_KEY}&addRecipeInformation=true&number=100`);
            // let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_API_KEY}&addRecipeInformation=true&number=100`);
            let ApiRes = await response.json();
            
            //mapeo para devolver los datos que se necesitan
            ApiRes = mapping(ApiRes);
            // console.log(ApiRes)
        let LocalRes = await Recipe.findAll({
            include: {
                model: Diet
            }
        })
        LocalRes = normalizationWithoutID(LocalRes)
        // console.log(LocalRes)
        
        
        
        res.status(200).json([...ApiRes, ...LocalRes])
    }
    catch(err){
        return res.send(err);
    }
}
});

router.get("/:id", async (req,res) => {
    let {id} = req.params
    try{
        //Acá me pregunto si el id tiene 36 caracteres(lo que seria equivalente a un UUID)
        if (id.length === 36){
            //Si es asi, lo busco en mi tabla
            let LocalRes = await Recipe.findAll({
                where:{
                    id: {
                        [Op.eq]: id
                    }
                },
                include: [{
                    model: Diet
                }]
            })
            //Si lo encontró, lo envío
            if (LocalRes.hasOwnProperty("id") !== undefined){
                //Normalizacion Diets para poder mostrar los detalles en el front hecha en la funcion
                let Rec = normalizationWithoutID(LocalRes);
                res.status(200).json(Rec);
                // res.status(200).json(LocalRes);
            }
            else {
                res.status(404).send("Detalle no disponible en la DB")
            }
        }
        //Si el id tuviese otro length, lo busco en la Api...
        else if (id.length !== 36){
            //ApiRes contiene los datos de la Api
            let response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APP_API_KEY}`);
            let ApiRes = await response.json();
            //filtro para devolver los datos que se necesitan
            let ApiRespuesta = filter(ApiRes);

            let pasos = [];
            ApiRespuesta.analyzedInstructions? ApiRespuesta.analyzedInstructions.steps.forEach(s =>{
            let paso = {
                step: s.step
            }
            pasos.push(paso)
            }): null

            ApiRespuesta.analyzedInstructions = pasos;
            
            //Si encontró algo, pregunto si en verdad es un dato válido o es undefined
            if (ApiRespuesta.id !== undefined){
                res.status(200).json(ApiRespuesta);
            }
            else {
                res.status(404).send("Detalle no disponible en la API")
            }
        }//Caso contrario, si no encontró el id en la db o en la api, me retorna el 404
        else {
            res.status(404).send("Detalle no disponible");
        }
    }
    catch(err){
        return res.send(err);
    }
});

module.exports = router;