const express = require('express')
const router = express.Router()
const mongojs = require('mongojs')

const config = require('../../config')
const db = mongojs(config.db, [config.collection1])



router.get('/tasks', (req,res)=>{
    //res.send('TASKS API')
    db.tasks.find((err,tasks)=>{
        if(err) {
            res.send(err)
        }
        res.json(tasks)
    })
})

router.get('/tasks/:idTask', (req,res)=>{
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.idTasks)}, (err,task)=>{
        if(err) {
            res.send(err)
        }
        res.json(task)
    })
})

router.post('/tasks', (req,res)=>{
    const task = req.body
    if(!task.title || !(task.isDone + '')) {
        res.status(400).send({
            'error':'Bad Data'
        })
    }else {
        db.tasks.save(task, (err,task)=>{
            if(err) {
                res.send(err)
            }
            res.json(task)
        })
    }
})

router.put('/tasks/:idTask', (req,res)=>{
    const task = req.body
    const updateTask = {}
    if(task.title) {
        updateTask.title=task.title
    }
    if(task.isDone) {
        updateTask.isDone=task.isDone
    }

    if(!updateTask) {
        res.status(400).send({
            'error':'Bad Data'
        })
    }else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.idTask)}, updateTask, {}, (err,task)=>{
            if(err) {
                res.send(err)
            }
            res.json(task)
        })
    }
})

router.delete('/tasks/:idTask', (req,res)=>{
    db.tasks.remove({_id: mongojs.ObjectId(req.params.idTask)}, (err,result)=>{
        if(err) {
            res.send(err)
        }
        res.json(result)
    })
})

module.exports = router