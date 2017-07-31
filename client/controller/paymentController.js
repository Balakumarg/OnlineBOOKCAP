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
$http.post('/payment/payment', $scope.payment).success(function (response) {
console.log(response);

        alert("Payment Saved!!!!");
location.reload(true);


  });
}



});
