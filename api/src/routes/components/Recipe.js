const express = require ("express");
const router = express.Router();
//Me traigo Fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//Me traigo las tablas de la DB
const {Diet, Recipe} = require("../../db.js");
//Me traigo los operadores de sequelize
const { Op } = require ("sequelize");
const { response } = require("express");
//Me traigo la Api Key
require('dotenv').config();
const {APP_API_KEY} = process.env;

router.post("/", async (req,res) => {
    //Recibo por body la nueva receta a crear
    const {title, summary, spoonacularScore, healthScore, analyzedInstructions, dietID} = req.body;
    try{
        //Creo la nueva receta
        const recipe = await Recipe.create({
            title,
            summary,
            spoonacularScore,
            healthScore,
            analyzedInstructions
        })
        //Busco si la dieta que me pasaron coincide con alguna de la base de datos (Si no coincide me devuelve null y el catch agarra el error ya que no puedo generar la relacion entre tablas con un Null)
        const dieta = await Diet.findOne({
            where: {
                id: dietID
            }
        })
        console.log(recipe);
        console.log(dieta)
        //Genero la relación entre tablas
        recipe.addDiet(dieta);
        res.status(200).json(recipe);
    }
    catch(err){
        console.log(err)
        res.status(404).send(err)
    }
});

module.exports = router;