const expess = require('express');
const router = expess.Router();

const qs = require('../Models/Recipe-Model.js');

router.get('/recipes', (req,res)=>{
    qs.getAll()
    .then(list=>{
        res.status(200).json({list})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.get('/recipes/:id', (req,res)=>{
    const id = req.params.id;
    qs.newgetbyId(id)
    .then(item=>{
        res.status(200).json({item})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.put('/recipes/:id', (req,res)=>{
    const body = req.body;
    const id = req.params.id;

    qs.editRecipe(id, body)
    .then((recipe)=>{
        res.status(200).json({recipe})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({err})
    })

})

router.post('/recipes', (req,res)=>{
    const recipe = req.body;
    qs.postRecipe(recipe)
    .then((id)=>{
        res.status(200).json({id})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({err})
    })
})

router.post('/recipes/:id/steps', (req,res)=>{
    //got the connection function to work too. So basically I'm just passing steps to the end point for that indicidial recipe and it will add to the step table as well as the transaction table
    const id = req.params.id;
    const body = req.body;
    qs.AddSteps(id,body)
    .then(id=>{
        res.status(200).json({id})
    })
    .catch(err=>{
        console.log("error i guess",err)
        res.status(500).json({err})
    })
})

router.get('/recipes/:id/steps', (req,res)=>{
    const id = req.params.id;
    qs.getRecipeSteps(id)
    .then(steps=>{
        res.status(200).json({steps})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({err})
    })
})

router.get('/recipes/:id/ingredients', async (req,res)=>{
    const id = req.params.id;

    try{
        const yeet = await qs.getRecipeIngredients(id)
    
        res.status(200).json({yeet});
    }
    catch(err){
        res.status(500).json({err})
    }
 
})

router.post('/recipes/:id/ingredients', (req,res)=>{
    const body = req.body;
    const id = req.params.id;

    qs.addIngredients(id,body)
    .then(stuff=>{
        res.status(200).json({stuff})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({err})
    })
})

module.exports = router;