angular.module('tatluApp').controller('ProcedureController', function($scope, $http) {


    $scope.RefreshProcedure = function () {
          $http.get('/prcd/prcd').success(function (response) {
              $scope.procedureList = response;
              $scope.pro="";
          });

      };

     $scope.RefreshProcedure();





     var id;


     $scope.genId=function(){

       var name = $scope.pro.type.substr(0, 4);

       if(name.length==4){

         id=name+ Math.random().toString(10).substr(2,4);

       } else if(name.length==3){

         id=name+"0"+ Math.random().toString(10).substr(2,4);

       } else if(name.length==2){

         id=name+"00"+ Math.random().toString(10).substr(2,4);
       }


       $scope.pro.id=id;

     };





      $scope.SaveProcedure=function(){


      $http.post('/prcd/prcd', $scope.pro).success(function (response) {
      console.log(response);
      alert("Procedure saved!!!!");
location.reload(true);
      		//	$scope.RefreshProcedure();
      	});
      }




});
