const express = require('express');
const router = express.Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const RouteDiets = require ("./components/Diets");
const RouteRecipes = require ("./components/Recipes");
const RouteRecipe = require ("./components/Recipe");



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/types", RouteDiets)
router.use("/recipes", RouteRecipes)
router.use("/recipe", RouteRecipe)


module.exports = router;
