 
var express = require('express');
const task = require('../models/task');

var router = express.Router();

router.post('/add', function(req, res) {
    task.create({description:req.body.description},
        function(err, tasks) {
            if(err) {
                return res.send(err);
            }
            return res.json({tasks:tasks});
        });
});

router.get('/list', function(req, res) {
    
    task.find({}, function(err, tasks) {
        if(err) {
            
            return res.send(err);
        }
        return res.json({tasks:tasks});
    });
});

router.delete('/delete/:_id', function(req, res) {
    task.findByIdAndDelete(req.params._id, function(err, tasks) {
        if(err) {
            return res.send(err);
        }
        return res.json({tasks:tasks});
    });
});

module.exports = router;