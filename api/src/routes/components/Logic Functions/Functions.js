function mapping (ApiRes){
   ApiResultado = ApiRes.results.map(({id, title, summary, spoonacularScore, healthScore, analyzedInstructions, image, diets}) => ({
        id,
        title,
        summary,
        spoonacularScore,
        healthScore,
        analyzedInstructions,
        image,
        diets

    }));
    return ApiResultado;
}

function normalization (LocalRes){
    let arregloDietas = [];
    let Rec = LocalRes.dataValues.diets;
    Rec.forEach(Diet => {
        arregloDietas.push(Diet.dataValues.name)
    });
    //Elimino las props que no me interesan recibir
    delete LocalRes.dataValues.createdAt;
    delete LocalRes.dataValues.updatedAt;
    delete LocalRes.dataValues.diets;
    //Seteo en la prop "dieta" los tipos de dieta
    LocalRes.dataValues.dieta = arregloDietas;
    console.log(LocalRes)
    return LocalRes;
}

function filter (ApiRes){
    let ApiRespuesta = {
        id: ApiRes.id, 
        title: ApiRes.title, 
        summary: ApiRes.summary, 
        spoonacularScore: ApiRes.spoonacularScore, 
        healthScore: ApiRes.healthScore, 
        analyzedInstructions: ApiRes.analyzedInstructions,
        diets: ApiRes.diets,
        image: ApiRes.image,
        dishTypes: ApiRes.dishTypes
    }
    return ApiRespuesta;
}

module.exports = {
    mapping,
    normalization,
    filter
}