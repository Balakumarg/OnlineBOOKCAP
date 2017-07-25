          var express =require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
// var mongoose = require('mongoose');

var doctorhomeSchema = mongoose.Schema({




      pwarning: String,
       pwarningdate: String,
       pwarningpast: String,
        pwarningpastdate: String,


    });

var dochme = mongoose.model( 'dochme',doctorhomeSchema, 'doctorhme_collection');


router.get('/doctorhome', function (req, res,next) {
    console.log("REACHED GET FUNCTION ON SERVER");

    dochme.find({}, function (err, docs) {
         res.json(docs);
        //  console.log(docs);

    });
});

router.get('/doctorhome/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     dochme.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/doctorhome', function(req, res){
  console.log(req.body);



  var Title = req.body.title;
    var Aalert = req.body.activealert;
    var Palert = req.body.passivealert;
    var Premain = req.body.patientremainder;
    var Cwarn = req.body.cwarning;
    var Cwdate = req.body.cwarningdate;
    var Cwarnpast = req.body.cwarningpast;
    var Cwpastdate = req.body.cwarningpastdate;
    var Pwarn = req.body.pwarning;
    var Pwarndate = req.body.pwarningdate;
    var Pwarnpast = req.body.pwarningpast;
    var Pwarnpastdate = req.body.pwarningpastdate;



   var rules = new dochme({
     title:Title,
     activealert:Aalert,
     passivealert:Palert,
     patientremainder:Premain,
     cwarning:Cwarn,
     cwarningdate:Cwdate,
     cwarningpast:Cwarnpast,
     cwarningpastdate:Cwpastdate,
     pwarning:Pwarn,
     pwarningdate:Pwarndate,
     pwarningpast:Pwarnpast,
     pwarningpastdate:Pwarnpastdate


  });









  rules.save(function(error, docs){
    if ( error ) throw error;
    console.log("Type Saved Successfully");
    res.json(docs);
  });

  })



router.delete('/doctorhome/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      dochme.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/doctorhome/:id', function(req, res){
    console.log("REACHED updation ");
    console.log(req.body);
    dochme.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})




router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = router;
