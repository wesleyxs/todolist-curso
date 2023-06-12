const Task = require("../models/Task")


let message = ""
let type = ""

const getAllTasks = async (req,res) => {
   
    try{
      setTimeout(() => {
        message = ""
      }, 2000)
          const tasksList = await Task.find();
          return res.render("index", {
            tasksList, 
            task: null,
            taskDelete: null,
            message,
            type
          });

    } catch (err){
    res.status(500).send({error: err.message});
    }  
};

// xxxxxxxxxxxxxxxxxxxxxxx

const createTask = async (req, res) => {
    const task = req.body;
   
    if(!task.task){
        message = "Insira um Texto Para Salvar"
        type = "danger"
        return res.redirect("/");
    }
    
    try{
        await Task.create(task);
        message = "Tarefa Criada com Sucesso"
        type = "success"
        return res.redirect("/");
    } catch(err) {
        res.status(500).send({error: err.message});
    }
};

   const getById = async (req, res) => {
    try {
      const tasksList = await Task.find();
      if(req.params.method == "update") {
        const task  = await Task.findOne({ _id: req.params.id });
        res.render("index", { task, taskDelete: null, tasksList,message, type });
      }else{
        const taskDelete = await Task.findOne({ _id: req.params.id });
        res.render("index", { task: null, taskDelete , tasksList, message, type });
      }
      
    } catch (err) {
      res.status(500).send({ error: err.message });
    }

   
};
  
  const updateOneTask = async  (req, res) => {
    
    try{
    const task = req.body;
    await Task.updateOne({ _id: req.params.id}, task);
    message = "Tarefa Editada com Sucesso"
    type = "success"
    res.redirect("/");
    } catch (err) {
      res.status(500).send({ error: err.message });
    }      
};

const deleteOneTask = async (req, res) =>{

   try{
     await Task.deleteOne({_id: req.params.id})
    message = "Tarefa apagada com sucesso"
    type = "success"
      res.redirect("/")
    } catch (err) {
      res.status(500).send({ error: err.message });
    }  
   

};

const taskCheck = async(req,res) => {
  try{
   const task = await Task.findOne({_id: req.params.id});
   if(task.check){
    task.check = false;
   }else {
    task.check = true;
   }
  
   await Task.updateOne({_id: req.params.id}, task);
   res.redirect("/");

  } catch(err) {
    res.status(500).send({ error: err.message });
  }
}

module.exports = {
    getAllTasks,
    createTask,
    getById,
    updateOneTask,
    deleteOneTask,
    taskCheck,
};