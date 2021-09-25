const express = require ("express");
const router = express.Router();

//Endpoint de prueba para ver si funca la pagina:
// router.get("/", (req,res) => {
//     res.send("Hola Mundo")
// })
router.get("/", (req,res) => {
    const {name} = req.query
    if (name){
        res.status(404).send("No existe ninguna receta")
    }
})


module.exports = router;