const express = require ("express");
const router = express.Router();
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
                }
            })
            //mapeo para devolver los datos que se necesitan
        ApiRes = ApiRes.results.map(({id, title, summary, spoonacularScore, healthScore, analyzedInstructions, image, diets}) => ({
            id,
            title,
            summary,
            spoonacularScore,
            healthScore,
            analyzedInstructions,
            image,
            diets

        }));
            res.status(200).send([...ApiRes, ...LocalRes]);
        }
        catch(error){
                res.status(404).send("No se ha encontrado dicha receta")
            }
    } else {
        try{
            //ApiRes contiene los datos de la Api
            let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_API_KEY}&addRecipeInformation=true&number=5`);
            // let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_API_KEY}&addRecipeInformation=true&number=100`);
            let ApiRes = await response.json();
            
            //mapeo para devolver los datos que se necesitan
            console.log("ApiRes", ApiRes)
            ApiRes = ApiRes.results.map(({id, title, summary, spoonacularScore, healthScore, analyzedInstructions, image, diets}) => ({
                id,
                title,
                summary,
                spoonacularScore,
                healthScore,
                analyzedInstructions,
                image,
                diets
                
            }));
            
            // console.log(ApiRes)
        let LocalRes = await Recipe.findAll()
        res.status(200).json([...ApiRes, ...LocalRes])
    }
    catch(err){
        return res.send(err);
    }
}
});

router.get("/:id", async (req,res) => {
    let {id} = req.params
    // console.log(id)
    try{
        //Acá me pregunto si el id tiene 36 caracteres(lo que seria equivalente a un UUID)
        if (id.length === 36){
            //Si es asi, lo busco en mi tabla
            let LocalRes = await Recipe.findOne({
                where:{
                    id: {
                        [Op.eq]: id
                    }
                },
                include: {
                    model: Diet
                }
            })
            //Si lo encontró, lo envío
            if (LocalRes){
                //Normalizando Diets para poder mostrar los detalles en el front

                let arreglo = [];
                // console.log("LocalRes", LocalRes)
                let Rec = LocalRes.dataValues.diets;
                console.log(Rec)
                Rec.forEach(Diet => {
                   arreglo.push(Diet.dataValues.name)
                })
                console.log("Arreglo", arreglo)

                delete LocalRes.dataValues.createdAt
                delete LocalRes.dataValues.updatedAt
                delete LocalRes.dataValues.diets

                LocalRes.dataValues.dieta = arreglo;
                // Object.defineProperty(LocalRes.dataValues, diets,  )
                console.log("LocalRes", LocalRes)

                res.status(200).json(LocalRes);
            }
        }
        //Si el id tuviese otro length, lo busco en la Api...
        else if (id.length !== 36){
            //ApiRes contiene los datos de la Api
            let response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APP_API_KEY}`);
            let ApiRes = await response.json();
            // console.log(ApiRes)

            //filtro para devolver los datos que se necesitan
            let ApiRespuesta = {
                id: ApiRes.id, 
                title: ApiRes.title, 
                summary: ApiRes.summary, 
                spoonacularScore: ApiRes.spoonacularScore, 
                healthScore: ApiRes.healthScore, 
                analyzedInstructions: ApiRes.analyzedInstructions,
                diets: ApiRes.diets,
                image: ApiRes.image,
                dishTypes: ApiRes.dishTypes
            }
            // console.log(ApiRespuesta)
            // console.log(LocalRes)
            //Si encontró algo, lo devuelvo
            if (ApiRespuesta){
                res.status(200).json(ApiRespuesta);
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