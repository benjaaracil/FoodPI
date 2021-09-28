const express = require ("express");
const router = express.Router();
//Me traigo Axios
const axios = require("axios");
//Me traigo las tablas de la DB
const {Diet, Recipe, Recipe_Diet} = require("../../db.js");
//Me traigo los operadores de sequelize
const { Op } = require ("sequelize");
//Me traigo la Api Key
require('dotenv').config();
const {APP_API_KEY} = process.env;

//Endpoint de prueba para ver si funca la pagina:
router.get("/types", async (req,res) => {  
    try{
        //Me fijo si en mi db ya estan cargados los tipos de dieta
        let hay = await Diet.findAll()
        //Si no lo estan...
        if (!hay.length){
            await Diet.bulkCreate()
        }

    }
    catch(err){
        return res.send(err)
    }
})


module.exports = router;