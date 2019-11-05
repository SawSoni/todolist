//this is rest full api
var express = require('express');
var router = express.Router();//from express
var mongojs = require('mongojs');
//var db = mongojs('mongodb://sawsoni:Incorrect12!@ds045628.mlab.com:45628/tasklist_soni',['tasks']);
 var db = mongojs('mongodb://localhost:27017/soni');
// this is database information

//

router.get('/users',function(req,res,next){
	res.send('users page')//this will print this string
//   res.render('index.html');
});
/* router.get('/',function(req,res,next){
	db.persons.find( function(err, p){
		if(err){
			res.send(err);
		}

		res.json(p);
	})
	
}); */

//set home page it will be get request(GET)
//Get all tasks
/* router.get('/task',function(req,res,next){
	// res.send('Task API');
	db.tasks.find(function(err,tasks){
		if(err){
			res.send(err);
		}

		res.json(tasks);
	})
}); */

//Get Single Task
/* router.get('/task/:id',function(req,res,next){
	console.log(req.params);
	
	db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task){
		if(err){
			res.send(err);
		}

		res.json(task);
	})
}); */

//Save/Create Task
/* router.post('/task',function(req,res,next){
	console.log(req.body);//to get the data from form
	console.log(res.body);
	var task = req.body;
	if(!task.title || (!task.isDone)){
		res.status(400);
		res.json({
			"error":"Bad Data"
		});
	} else{

		db.tasks.save(task,function(err,task){
		if(err){
			res.send(err);
		}

			res.json(task);
		});
	}
}) */

//Delete Task
/* 
router.delete('/task/:id',function(req,res,next){
	
	db.tasks.remove({_id:mongojs.ObjectId(req.params.id)},function(err,task){
		if(err){
			res.send(err);
		}

		res.json(task);
	})
}); */

//Update Task
/* router.put('/task/:id',function(req,res,next){
	var task = req.body;
	var updTask = {};

	if(task.isDone){
		updTask.isDone = task.isDone
	}

	if(task.title){
		updTask.title = task.title;
	}

	if(!updTask){
		res.status(400);
		res.json({
			"error":"Bad Data"
		});
	} else {

		db.tasks.update({_id:mongojs.ObjectId(req.params.id)},updTask, {} ,function(err,task){
		if(err){
			res.send(err);
		}

		res.json(task);
	});

	}

	
}); */


module.exports = router;
