const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

router.get('/', (req, res)=> {
    Employee.find((err, docs) => {
        if(!err){res.send(docs);}
        else{ console.log('Error in Retrieving Employees :' + JSON.stringify(err, undefined, 2));}
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No record is here with id:, ${req.params.id}');
    }

    Employee.findById(req.params.id,(err, doc) => {
        if(!err){res.send(doc);}
        else{
            console.log('Error in Retrieving this Employees :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No record is here with id:, ${req.params.id}');
    }else{
        var emp = {
            name: req.body.name,
            position: req.body.position,
            office: req.body.office,
            salary: req.body.salary
        }

        Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true}, (err, doc)=>{
            if(!err){res.send(doc);}
            else{
                console.log('Error in updating this Employees :' + JSON.stringify(err, undefined, 2));
            }
        });
    }
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No record is here with id:, ${req.params.id}');
    }else{
        Employee.findByIdAndRemove(req.params.id, (err, doc) => {
            if(!err){res.send(doc);}
            else{
                if(!err){res.send(doc);}
                console.log('Error in deleting this Employees :' + JSON.stringify(err, undefined, 2));
            }
        });
    }
});

router.post('/', (req, res)=>{
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doct) => {
        if(!err){res.send(doct);}
        else{ console.log('Error in saving Employees :' + JSON.stringify(err, undefined, 2));}
    });
});

module.exports = router;