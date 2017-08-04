// angular.module('tatluApp').controller('recordsController', function($scope, $http,$cookies,AuthenticationService,$location,fileUpload) {
//
//
//   var authUser = $cookies.getObject('authUser');
//   var Userfname = authUser.currentUser.userInfo.fname;
//   var UserID = authUser.currentUser.userInfo.Id;
//
//   $scope.fname = Userfname;
//   $scope.Id = UserID;
//
//
//
//
//
// //
// //
// //
// //     //  $scope.arraylist=[];
// //
// //
// //       //getting menubar details from database//
// //         $scope.refreshrecords = function () {
// //               $http.get('/records/records').success(function (response) {
// //                   console.log(' READ IS SUCCESSFUL');
// //                   $scope.recordsList = response;
// //                     $scope.records = "";
// //
// //
// //               });
// //           };
// //
// //
// //   refreshrecords();
// //
// //
// //
// //
// //
// //
// //
// // //
// // //   var refreshrecords = function () {
// // //         $http.get('/records/records').success(function (response) {
// // //             $scope.recordslist = response;
// // //
// // //             for(var i=0;i<$scope.recordList.length;i++){
// // //
// // //
// // //               if($scope.recordList[i].==UserID){
// // //                 console.log($scope.recordList[i]);
// // //   $scope.arraylist.push($scope.recordList[i]);
// // //
// // // console.log($scope.arraylist);
// // //
// // //               }
// // //
// // //
// // //             }
// // //
// // //               $scope.records ="";
// // //         });
// // //     };
// // //     refreshrecords();
// // //
// //
// //
// //
// //
// //
// //
// //
// //
//
// // ************************************************************************************************//
//
//
//
//
//
//
//
//
//
//
//
//   $scope.addrecords=function(){
//
//                 var file =$scope.recordfile;
//                 var uploadUrl = "/savedata1";
//                 fileUpload.uploadFileToUrl(file, uploadUrl);
//
//           $scope.records.recordfilename=UserID+$scope.recordfile.name;
//           $scope.records.patient_name= Userfname;
//           $scope.records.patientid=UserID;
//
//           $http.post('/records/records', $scope.records).success(function (response) {
//           console.log(response);
//
//   //$rootScope.petientDetails=response;
//
//           alert("File uploaded completed!!!!");
//
//           });
//
//
//
//
//
//   }
//
//
//
//
//
//
//
//
//
// });























angular.module('tatluApp').controller('recordsController', function($scope, $http,$cookies,AuthenticationService,$location,fileUpload) {







//
//
//
//     //  $scope.arraylist=[];
//
//
//       //getting menubar details from database//
//         $scope.refreshrecords = function () {
//               $http.get('/records/records').success(function (response) {
//                   console.log(' READ IS SUCCESSFUL');
//                   $scope.recordsList = response;
//                     $scope.records = "";
//
//
//               });
//           };
//
//
//   refreshrecords();
//
//
//
//
//
//
//
// //
// //   var refreshrecords = function () {
// //         $http.get('/records/records').success(function (response) {
// //             $scope.recordslist = response;
// //
// //             for(var i=0;i<$scope.recordList.length;i++){
// //
// //
// //               if($scope.recordList[i].==UserID){
// //                 console.log($scope.recordList[i]);
// //   $scope.arraylist.push($scope.recordList[i]);
// //
// // console.log($scope.arraylist);
// //
// //               }
// //
// //
// //             }
// //
// //               $scope.records ="";
// //         });
// //     };
// //     refreshrecords();
// //
//
//
//
//
//
//
//
//

// ************************************************************************************************//

var refreshrecords = function () {

  
               $http.get('/records/records').success(function (response) {
                   console.log(' READ IS SUCCESSFUL');
                   $scope.recordsList = response;
                     $scope.records = "";





               });
           };

     refreshrecords();




  $scope.addrecords=function(){

    var authUser = $cookies.getObject('authUser');
    var Userfname = authUser.currentUser.userInfo.fname;
    var UserID = authUser.currentUser.userInfo.Id;

    $scope.fname = Userfname;
    $scope.Id = UserID;





                var file =$scope.recordfile;
                var uploadUrl = "/savedata1";
                fileUpload.uploadFileToUrl(file, uploadUrl);

          $scope.records.recordfilename=UserID+$scope.recordfile.name;
          $scope.records.patient_name= Userfname;
          $scope.records.patientid=UserID;

          $http.post('/records/records', $scope.records).success(function (response) {
          console.log(response);

  //$rootScope.petientDetails=response;

          alert("File uploaded completed!!!!");

          });





  }









});
