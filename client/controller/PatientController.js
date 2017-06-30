angular.module('tatluApp').controller('PatientController', function($scope, $http,fileUpload,$location,$rootScope) {
  var socket=io();

$scope.refreshpat=function(){
  $http.get('/patient/patient').success(function (response) {
      $scope.patientList = response;
      $scope.patient={};

  });
}

$scope.refreshpat();
   $scope.refreshfacility = function () {
      $http.get('/facilityadm/facilityadm').success(function (response) {
          console.log(' READ IS SUCCESSFUL');
          $scope.FacilityList = response;
        });
      };
       $scope.refreshfacility();

  $scope.refreshdoctor = function () {
        $http.get('/doctor/doctor').success(function (response) {
            console.log(' READ IS SUCCESSFUL');
            $scope.doctorlist = response;
            $scope.doctor = "";
        });
    };


  $scope.refreshdoctor();
  
    $scope.refreshnurse = function () {
          $http.get('/nurse/nurse').success(function (response) {
              console.log(' READ IS SUCCESSFUL');
              $scope.nurselist = response;
              $scope.nurse="";
          });
      };

      $scope.refreshnurse();

      $scope.refreshncal = function () {
            $http.get('/cal/cal').success(function (response) {
                console.log(' READ IS SUCCESSFUL');
                $scope.callist = response;
                $scope.nurse="";
            });
        };

        $scope.refreshncal();
  $scope.refreshFrontdesk = function () {
      $http.get('/front/front').success(function (response) {
          console.log(' READ IS SUCCESSFUL');
          $scope.frontlist = response;
        });
      };
      $scope.refreshFrontdesk();


$scope.datepickerConfig = {
         allowFuture: false,
         dateFormat: 'DD/MM/YYYY'
     };

$scope.gender = ['Male', 'Female'];
$scope.resetpatient = function() {
  $scope.patient =


  {
    patientname: "",
    age: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    profileimage: "",
    userName: "",
    Password: "",
    cPassword: ""

  }



};
$scope.resetpatient();


var id;


$scope.showid=true;

$scope.genId=function(){

  var name = $scope.patient.firstName.substr(0, 4);

  if(name.length==4){

    id=name+ Math.random().toString(10).substr(2,4);

  } else if(name.length==3){

    id=name+"0"+ Math.random().toString(10).substr(2,4);

  } else if(name.length==2){

    id=name+"00"+ Math.random().toString(10).substr(2,4);
  }


  $scope.patient.id=id;

}


$scope.addpatient=function(){
      if($scope.patient.Password===$scope.patient.cPassword){

              var file =$scope.myFile;
              var uploadUrl = "/savedata";
              fileUpload.uploadFileToUrl(file, uploadUrl);

        $scope.patient.profileImage=$scope.myFile.name;
        $scope.patient.membershipType="No-Member";
        $scope.patient.UserType="Patient";

        $http.post('/patient/patient', $scope.patient).success(function (response) {
        console.log(response);

$rootScope.petientDetails=response;

        alert($scope.patient.id+"Registration completed!!!!");
        $location.path('/membertype');
        });

        $http.post('/api/signup', $scope.patient).then(function(response) {
                alert('patient Registration Successful');
            });
            $http.post('/online/online', $scope.patient).then(function(response) {
                });
      }else{

      alert("Your password is not matching...Try again");

      }

}









});
