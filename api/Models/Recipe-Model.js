const db = require('../../data/seeds/Config/db-config.js');

const getAll =()=>{
    return db('test')
    .select('name')
    .from('recipe')
    .orderBy("id")
}

const getbyId=(id)=>{
    return db('test')
    .select('name')
    .from('recipe')
    .where("id",id)
    .first()
}

const editRecipe= async (id, body)=>{
    await db ('recipe')
    .where('id', id)
    .update(body)

    return getbyId(id)

}

const postRecipe = (recipe)=>{
   return db('recipe')
    .insert(recipe, "id")
}

const ConnectSteps = (rID, sID)=>{
    
    return db('recipe_step')
    .insert({recipeid: rID, stepid:sID})
    
}

const AddSteps = (rID, body)=>{
    return db('step')
    .insert(body, "id")
    .then(sID=>{
        ConnectSteps(rID,sID[0])
    })
    
}

const getRecipeSteps = (id)=>{
    return db ('test')
    .select('s.name as Stepname')
    .from('recipe')
    .join('recipe_step as rs', 'recipe.id', 'rs.recipeid')
    .join('step as s', 'rs.stepid', 's.id')
    .where('recipe.id', id)
}

const getRecipeIngredients = (id)=>{
    return db ('test')
    .select('i.name as Ingredient')
    .from('recipe')
    .join('recipe_ingredient as ri', 'recipe.id', 'ri.recipeid')
    .join('ingredient as i', 'ri.ingredientid', 'i.id')
    .where('recipe.id', id)
}

const connectIngredients = (rID, iID)=>{
    return db ('recipe_ingredient')
    .insert({recipeid: rID, ingredientid: iID})

}

const addIngredients = (rID, body)=>{

    return db('ingredient')
    .insert(body, "id")
    .then(id=>{
        return connectIngredients(rID, id[0])
    })

}

const newgetbyId = async (id)=>{
    const yeet = await getRecipeSteps(id)
    const yate = await getRecipeIngredients(id)
    return db('test')
    .select('name')
    .from('recipe')
    .where("id",id)
    .first()
    .then(item=>{
        item = {...item, steps:yeet, ingredients:yate}
        return item
    })
}

module.exports ={
    getAll,
    getbyId,
    editRecipe,
    postRecipe,
    AddSteps,
    getRecipeSteps,
    newgetbyId,
    getRecipeIngredients,
    addIngredients

}