const express = require ("express");
const router = express.Router();

//Endpoint de prueba para ver si funca la pagina:
router.get("/", (req,res) => {
    res.send("Hola Mundo")
})


module.exports = router;