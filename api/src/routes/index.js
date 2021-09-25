const express = require('express');
const router = express.Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const RouteDiets = require ("./components/Diets");
const RouteRecipes = require ("./components/Recipes");




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/diets", RouteDiets)
router.use("/recipes", RouteRecipes)


module.exports = router;
