var express =require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
// var mongoose = require('mongoose');

var recordsSchema = mongoose.Schema({

      patientid:String,
      patient_name:String,
      recordfilename:String,
       description: String,



    });

var recordsadm = mongoose.model( 'recordsadm',recordsSchema, 'records_collection');


router.get('/records', function (req, res,next) {
    console.log("REACHED GET FUNCTION ON SERVER");

    recordsadm.find({}, function (err, docs) {
         res.json(docs);
        //  console.log(docs);

    });
});

router.get('/records/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     recordsadm.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/records', function(req, res){
  console.log(req.body);



    var recdfilename = req.body.recordfilename;
    var Description = req.body.description;
    var Patientname = req.body.patient_name;
    var patID = req.body.patientid;




   var records = new recordsadm({

     patientid:patID,
     patient_name:Patientname,
     description:Description,
     recordfilename:recdfilename,



  });









  records.save(function(error, docs){
    if ( error ) throw error;
    console.log("Type Saved Successfully");
    res.json(docs);
  });

  })



router.delete('/records/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      recordsadm.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/records/:id', function(req, res){
    console.log("REACHED updation ");
    console.log(req.body);
    recordsadm.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})




router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = router;
