var express =require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
// var mongoose = require('mongoose');

var NurseSchema = mongoose.Schema({
        id:String,
     firstName:String,
     lastName:String,
     userName:String,
     profileImage:String,
     email:String,
     dob:String,
     gender:String,
     mobile:String,
  position:String,
  experiance:String,
  reference:String,
  hospital:String,
     speciality: String

    });

var Nurse = mongoose.model('Nurse', NurseSchema, 'Nurse_collection');




router.get('/nurse', function (req, res,next) {
    console.log("REACHED GET FUNCTION ON SERVER");

    Nurse.find({}, function (err, docs) {
         res.json(docs);
        //  console.log(docs);

    });
});

router.get('/nurse/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Nurse.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/nurse', function(req, res){
  console.log(req.body);


  var Id = req.body.id;
    var Firstname = req.body.firstName;
    var Lastname = req.body.lastName;
    var Username = req.body.userName;
    var Image = req.body.profileImage;
    var Email = req.body.email;
    var Dob = req.body.dob;
      var Gender = req.body.gender;
      var Mobile = req.body.mobile;
      var pos = req.body.position;
      var exp = req.body.experiance;
      var ref = req.body.reference;
      var hos=req.body.hospital;
        var Speciality = req.body.speciality;





   var nurse1 = new Nurse({
     id:Id,
     firstName:Firstname,
     lastName:Lastname,
     userName:Username,
     profileImage:Image,
     email:Email,
     dob: Dob,
     gender:Gender,
     mobile:Mobile,
     position:pos,
     experiance:exp,
     reference:ref,
     hospital:hos,
     speciality: Speciality

  });


  nurse1.save(function(err, docs){
    if ( err ) throw err;
    console.log("Type Saved Successfully");
    res.json(docs);
  });

  })



router.delete('/nurse/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Nurse.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/nurse/:id', function(req, res){
    console.log("REACHED updation ");
    console.log(req.body);
    Nurse.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})




router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = router;
