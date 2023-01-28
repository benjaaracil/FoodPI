const express = require ("express");
const router = express.Router();

//Me traigo las tablas de la DB
const {Diet} = require("../../db.js");

router.get("/", async (req,res) => {
    try{
        let Diets = await Diet.findAll();
        res.status(200).json(Diets);
    }
    catch(err){
        return res.status(400).send(err)
    }
})


module.exports = router;