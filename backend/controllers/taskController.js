const Task = require("../models/Task");

exports.createTask = async(req,res)=>{
  try{

    const task = await Task.create({
      ...req.body,
      createdBy:req.user.id
    });

    res.status(201).json(task);

  }catch(error){
    res.status(500).json({message:error.message});
  }
};

exports.getTasks = async(req,res)=>{

  try{

    let tasks;

    if(req.user.role==="Admin"){
      tasks = await Task.find().populate("createdBy","name email");
    }else{
      tasks = await Task.find({
        createdBy:req.user.id
      });
    }

    res.json(tasks);

  }catch(error){
    res.status(500).json({message:error.message});
  }
};

exports.updateTask = async(req,res)=>{

  try{

    const task = await Task.findById(req.params.id);

    if(!task){
      return res.status(404).json({message:"Task not found"});
    }

    if(
      req.user.role !== "Admin" &&
      task.createdBy.toString() !== req.user.id
    ){
      return res.status(403).json({message:"Access denied"});
    }

    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );

    res.json(updated);

  }catch(error){
    res.status(500).json({message:error.message});
  }
};

exports.deleteTask = async(req,res)=>{

  try{

    const task = await Task.findById(req.params.id);

    if(!task){
      return res.status(404).json({message:"Task not found"});
    }

    if(
      req.user.role !== "Admin" &&
      task.createdBy.toString() !== req.user.id
    ){
      return res.status(403).json({message:"Access denied"});
    }

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message:"Task Deleted"
    });

  }catch(error){
    res.status(500).json({message:error.message});
  }
};