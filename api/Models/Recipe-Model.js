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
    .then(i=>{
        console.log(i)
    })
}

const AddSteps = (rID, body)=>{
    return db('step')
    .insert(body, "id")
    .then(sID=>{
        ConnectSteps(rID,sID[0])
    })
    
}

module.exports ={
    getAll,
    getbyId,
    editRecipe,
    postRecipe,
    AddSteps
}