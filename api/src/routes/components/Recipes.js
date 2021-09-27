const express = require ("express");
const router = express.Router();
//Me traigo Axios/Fetch?
// const axios = require("axios");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//Me traigo las tablas de la DB
const {Diet, Recipe, Recipe_Diet} = require("../../db.js");
//Me traigo los operadores de sequelize
const { Op } = require ("sequelize");
const { response } = require("express");
//Me traigo la Api Key
require('dotenv').config();
const {APP_API_KEY} = process.env;



//Endpoint de prueba para ver si funca la pagina:
// router.get("/", (req,res) => {
//     res.send("Hola Mundo")
// })
router.get("/", async (req,res) => {
    try{
        const {name} = req.query
        // console.log(name)
        //ApiRes contiene los datos de la Api
        let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_API_KEY}&addRecipeInformation=true`);
        let ApiRes = await response.json();

        //mapeo para devolver los datos que se necesitan
        ApiRes = ApiRes.results.map(({id, title, summary, spoonacularScore, healthScore, analyzedInstructions}) => ({
            id,
            title,
            summary,
            spoonacularScore,
            healthScore,
            analyzedInstructions
        }));
        // console.log(ApiRes)
        let LocalRes = await Recipe.findAll()
        //Evaluo si me llega algo por query yn en caso de que sim si me coincide el name con algo de la api o mi db
        if (name){
            // console.log(ApiRes)
            let ArrNameAPI = ApiRes.filter(receta => receta.title.includes(name));
            let ArrNameDB = LocalRes.filter(receta => receta.title.includes(name));
            // console.log(ArrNameAPI)
            if (!ArrNameAPI.length && !ArrNameDB.length){
                res.status(404).send("No se ha encontrado dicha receta")
            }
            else {
                res.status(200).json([...ArrNameAPI, ...ArrNameDB])
            }
        }
        else {
            res.status(200).json([...ApiRes, ...LocalRes])
        }
    }
    catch(err){
        return res.send(err);
    }
});

router.get("/:id", async (req,res) => {
    const {id} = req.params
    // console.log(id)
    try{
        //ApiRes contiene los datos de la Api
        let response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APP_API_KEY}`);
        let ApiRes = await response.json();
        // console.log(ApiRes)

        //mapeo para devolver los datos que se necesitan
        ApiRes = ApiRes.assign({}, ApiRes.id, ApiRes.title, ApiRes.summary, ApiRes.spoonacularScore, ApiRes.healthScore, ApiRes.analyzedInstructions )
        console.log(ApiRes)
        let LocalRes = await Recipe.findAll()
        //Evaluo si me llega algo por query yn en caso de que sim si me coincide el name con algo de la api o mi db
        if (id){
            // console.log(ApiRes)
            let ArrNameAPI = ApiRes.filter(receta => receta.id === id);
            let ArrNameDB = LocalRes.filter(receta => receta.id === id);
            // console.log(ArrNameAPI)
            if (!ArrNameAPI.length && !ArrNameDB.length){
                res.status(404).send("Detalle no disponible")
            }
            else {
                res.status(200).json([...ArrNameAPI, ...ArrNameDB])
            }
        }
        else {
            res.status(200).json([...ApiRes, ...LocalRes])
        }
    }
    catch(err){
        return res.send(err);
    }
});


module.exports = router;