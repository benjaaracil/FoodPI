const express = require ("express");
const router = express.Router();

//Me traigo las tablas de la DB
const {Diet, Recipe} = require("../../db.js");

router.post("/", async (req,res) => {
    //Recibo por body la nueva receta a crear
    const {title, summary, spoonacularScore, healthScore, analyzedInstructions, dietName} = req.body;
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
        const dieta = await Diet.findAll({
            where: {
                name: dietName
            }
        })
        // console.log(recipe);
        // console.log(dieta)
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