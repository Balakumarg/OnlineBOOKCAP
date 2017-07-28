angular.module('tatluApp').controller('bookappointmentController', function($scope, $http,fileUpload,$location,$rootScope,$cookies) {
  var socket=io();

var authUser = $cookies.getObject('authUser');

var Userfname = authUser.currentUser.userInfo.fname;
var UserID = authUser.currentUser.userInfo.Id;

$scope.fname = Userfname;
$scope.Id = UserID;





  



// **********************************  book appointment  *****************************************************

var authUser = $cookies.getObject('authUser');

var Userfname = authUser.currentUser.userInfo.fname;
var UserID = authUser.currentUser.userInfo.Id;

$scope.fname = Userfname;
$scope.Id = UserID;



var refreshbookapt = function () {


      $http.get('/bookappointment/bookappointment').success(function (response) {
          $scope.apptlist = response;
            $scope.bookappointment ="";
      });
  };
  refreshbookapt();


  $scope.addbookappointment = function(){

    // var data = $.param({
    //     bookappointment: JSON.stringify({
    //         // author: $scope.author,
    //         // title : $scope.title,
    //         // body : $scope.body,
    //         Patientid :  $scope.UserID
    //
    //
    //         //  Firstname = req.body.firstName;
    //         //  Patientid = req.body.patientid;
    //         //  Lastname = req.body.lastName;
    //         //  Service = req.body.service;
    //         //  Aptdate = req.body.appointdate;
    //         //  Apttime = req.body.appointtime;
    //         //  Gender = req.body.gender;
    //         //  Reason = req.body.reason;
    //
    //
    //     })
    //   });

      $scope.bookappointment.firstName=Userfname;
      $scope.bookappointment.patientid=UserID;

  $http.post('/bookappointment/bookappointment', $scope.bookappointment).success(function (response) {
  console.log(response);
  alert("Registration completed!!!");
      refreshbookapt();
  });
};



// *****************************************************************************************************************












});
