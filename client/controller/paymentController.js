angular.module('tatluApp').controller('paymentController', function($scope, $http) {

  $scope.RefreshPayment = function () {
        $http.get('/payment/payment').success(function (response) {
            console.log(' READ IS SUCCESSFUL');
            $scope.paymentList = response;
            $scope.payment = "";
        });
    };

   $scope.RefreshPayment();

   $scope.pageChangeHandler = function(num) {
     console.log('going to page ' + num);
   };
   $scope.currentPage = 1;
   $scope.pageSize = 5;


    $scope.datepickerConfig = {
             allowFuture: false,
             dateFormat: 'DD/MM/YYYY'
         };

$scope.addPayment=function(){
  
  
  
    $scope.payment.patientid=UserID;
  $scope.payment.firstName=Userfname;
// --------------------for total---------------------------

// $scope.parseFloat = function(value)
//     {
//         return parseFloat(value);
//     }


$scope.payment.total=(scope.payment.doctor_fess + $scope.payment.lab_fess + $scope.payment.medicine_cost )









// -------------------------------------------------------


  
  
  
  
  
  
  
$http.post('/payment/payment', $scope.payment).success(function (response) {
console.log(response);

        alert("Payment Saved!!!!");
location.reload(true);


  });
}



});
