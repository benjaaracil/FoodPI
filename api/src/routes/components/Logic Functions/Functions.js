function mapping (ApiRes){
// console.log(ApiRes)
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
    // console.log(ApiResultado)
    return ApiResultado;
}

function normalizationWithoutID (LocalRes){
    // console.log(LocalRes)
    let arregloDietas = [...LocalRes.map(r => {
        return r.toJSON()
    })];
    // console.log(arregloDietas)
    
    for (let i = 0; i < arregloDietas.length; i++) {
        arregloDietas[i].diets = arregloDietas[i].diets.map(d => d.name)
    }
    //Seteo en la prop "dieta" los tipos de dieta
    return arregloDietas;
}

function filter (ApiRes){
    let ApiRespuesta = {
        id: ApiRes.id, 
        title: ApiRes.title, 
        summary: ApiRes.summary, 
        spoonacularScore: ApiRes.spoonacularScore, 
        healthScore: ApiRes.healthScore, 
        analyzedInstructions: ApiRes.analyzedInstructions? ApiRes.analyzedInstructions[0]: null,
        diets: ApiRes.diets,
        image: ApiRes.image,
        dishTypes: ApiRes.dishTypes
    }
    return ApiRespuesta;
}

module.exports = {
    mapping,
    normalizationWithoutID,
    filter
}