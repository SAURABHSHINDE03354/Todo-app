const express = require('express');
const cors= require('cors');
const app = express();
const {createTodo ,updateTodo } = require('./types');
const {todos}= require('./db');



app.use(express.json())
app.use(cors())


app.post('/todo', async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you  sent the wrong input"
        })
        return;

    }
     await todos.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:createPayload.completed



    })
    res.status(200).json({
        msg:"todo created"
    })

})

app.get('/todos',async function(req,res){
    
    const todo = await todos.find();
    res.status(200).json({todo})


})

app.put('/completed', async function(req,res){

    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({msg :"You have sent the wrong inputs"})
        return;    
    }

 await todos.findOneAndUpdate({
        _id:req.body.id
    },

   { $set:{completed:true}}
    
    )
    res.status(200).json({msg:"todo updated"})


})


app.listen(3000,()=>{
    console.log('server is listening on 3000');
}

)
