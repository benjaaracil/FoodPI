const express = require ("express");
const router = express.Router();
//Me traigo Axios
const axios = require("axios");
//Me traigo las tablas de la DB
const {Diet, Recipe, Recipe_Diet} = require("../../db.js");
//Me traigo los operadores de sequelize
const { Op } = require ("sequelize");
//Me traigo la Api Key
const {APP_API_KEY} = process.env;



//Endpoint de prueba para ver si funca la pagina:
// router.get("/", (req,res) => {
//     res.send("Hola Mundo")
// })
router.get("/", async (req,res) => {
    const {name} = req.query
    try{ 
        if (name){
            await axios.get(`https://api.spoonacular.com/recipes/{id}/information?apiKey=${APP_API_KEY}`)
        }
        else {
            res.status(404).send("No existe ninguna receta")
        }
    }
    catch(err){
        next(err);
    }
})


module.exports = router;