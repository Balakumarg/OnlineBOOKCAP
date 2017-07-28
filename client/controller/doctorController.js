angular.module('tatluApp').controller('doctorController', function($scope,$http,$location,$cookies,AuthenticationService,$location) {




  $scope.dataSourcedoc1 =  { "chart": { "caption": "Clinical Revenue", "captionFontBold": "0", "captionFontSize": "20", "xAxisName": "Month",
"xAxisNameFontSize": "15", "xAxisNameFontBold": "0",  "yAxisNameFontSize": "15", "yAxisNameFontBold": "0", "paletteColors": "#2ECC71",
"plotFillAlpha": "80", "usePlotGradientColor": "0",  "bgcolor": "#", "bgalpha": "95", "canvasbgalpha": "0",
"basefontcolor": "000002", "showAlternateHGridColor": "0", "divlinealpha": "50", "divlinedashed": "0", "toolTipBgColor": "#000",
"toolTipPadding": "10", "toolTipBorderRadius": "5", "toolTipBorderThickness": "2", "toolTipBgAlpha": "62", "toolTipBorderColor": "#BBB",
   "rotateyaxisname": "1", "canvasbordercolor": "#000000", "canvasborderthickness": ".3", "canvasborderalpha": "100", "showValues": "0",
"plotSpacePercent": "12" }, "data": [{ "label": "Jan", "value": "42" }, { "label": "Feb", "value": "81" },

   { "label": "Jun", "value": "51" }, { "label": "Jul", "value": "60" }, { "label": "Aug", "value": "62" },
    { "label": "Sep", "value": "61" }, { "label": "Oct", "value": "40" }, { "label": "Nov", "value": "90" },
   { "label": "Dec", "value": "73" }]}

 $scope.dataSourcedoc2 =  { "chart": { "caption": "New Membership Patients", "captionFontBold": "0", "captionFontSize": "20", "xAxisName": "Month",
    "xAxisNameFontSize": "15", "xAxisNameFontBold": "0",  "yAxisNameFontSize": "15", "yAxisNameFontBold": "0", "paletteColors": "#DB0A5B",
       "plotFillAlpha": "80", "usePlotGradientColor": "0",  "bgcolor": "#", "bgalpha": "95", "canvasbgalpha": "0",
        "basefontcolor": "000002", "showAlternateHGridColor": "0", "divlinealpha": "50", "divlinedashed": "0", "toolTipBgColor": "#000",
   "toolTipPadding": "10", "toolTipBorderRadius": "5", "toolTipBorderThickness": "2", "toolTipBgAlpha": "62", "toolTipBorderColor": "#BBB",
        "rotateyaxisname": "1", "canvasbordercolor": "#000000", "canvasborderthickness": ".3", "canvasborderalpha": "100", "showValues": "0",
     "plotSpacePercent": "12" }, "data": [{ "label": "Jan", "value": "42" }, { "label": "Feb", "value": "81" },

    { "label": "Jun", "value": "51" }, { "label": "Jul", "value": "60" }, { "label": "Aug", "value": "62" },
     { "label": "Sep", "value": "61" }, { "label": "Oct", "value": "40" }, { "label": "Nov", "value": "90" },
      { "label": "Dec", "value": "73" }]}

      $scope.dataSourcedoc3 =  { "chart": { "caption": "Patient Health Progress", "captionFontBold": "0", "captionFontSize": "20", "xAxisName": "Month",
    "xAxisNameFontSize": "15", "xAxisNameFontBold": "0",  "yAxisNameFontSize": "15", "yAxisNameFontBold": "0", "paletteColors": "#d35400",
    "plotFillAlpha": "80", "usePlotGradientColor": "0",  "bgcolor": "#", "bgalpha": "95", "canvasbgalpha": "0",
    "basefontcolor": "000002", "showAlternateHGridColor": "0", "divlinealpha": "50", "divlinedashed": "0", "toolTipBgColor": "#000",
    "toolTipPadding": "10", "toolTipBorderRadius": "5", "toolTipBorderThickness": "2", "toolTipBgAlpha": "62", "toolTipBorderColor": "#BBB",
       "rotateyaxisname": "1", "canvasbordercolor": "#000000", "canvasborderthickness": ".3", "canvasborderalpha": "100", "showValues": "0",
    "plotSpacePercent": "12" }, "data": [{ "label": "Jan", "value": "42" }, { "label": "Feb", "value": "81" },

       { "label": "Jun", "value": "51" }, { "label": "Jul", "value": "60" }, { "label": "Aug", "value": "62" },
        { "label": "Sep", "value": "61" }, { "label": "Oct", "value": "40" }, { "label": "Nov", "value": "90" },
       { "label": "Dec", "value": "73" }]}




  $scope.datepickerConfig = {
           allowFuture: false,
           dateFormat: 'DD/MM/YYYY'
       };
  $scope.typeproblem = ['Asthma', 'BCC', 'Dermatochalasis', 'Diabetes','Dry eye', 'HTN','Hyperlipidemia', 'IDDM w/ BDR','Keratoconus', 'NIDDM w/ BDR','NS Cataract', 'POAG','SCC', 'Stye','Complete blood count', 'LIPID','KIDNEY FUNCTION', 'liver function','electrolytes', 'pancreatic enzymes',
  'cardiac panel', 'thyroid function','tumor marker', 'vitamins','iron profile', 'urine complete analysis'];
  $scope.typeallergy = ['Codeine', 'iodine','penicillic','sulfa'];
  $scope.typemedication = ['Lipitor', 'metformin','norvasc'];
  $scope.typesurgery = ['ALT OD','ALT OS','appendectomy','blepharoplasty','cholecystectomy','LPI OD','LPI OS','Phaco/IOL OD','Phaco/IOL OS','tonsillectomy'];
  $scope.occurance = ['Unknown', 'First','Early reccurence(<2months)','Last reccurence(2 – 12 months)','Delayed reccurence(>2months)','Chronic/Recurrent','Acute on chronic'];
   $scope.outcome = ['Unassignes', 'Resolved','Improved','Status quo','Worse','Pending followup'];
   $scope.severity = ['Unassigned','Mild','Mild to Moderate','Moderate','Moderate to Severe','Severe','Life Threatening Severity', 'Fatal'];
   $scope.reaction = ['Unassignes','Hives','Nausea','Shortness of Breath'];

  //  $scope.doctor.type1  = function(){
  //       return false;
  //   };
    var refreshbookapt = function () {
        $http.get('/bookappointment/bookappointment').success(function (response) {
            $scope.apptlist = response;
              $scope.bookappointment ={};
        });
    };
    refreshbookapt();
  
  $scope.appointment = function(){
    $location.path('/doctoradddescription');
  // $http.post('/doctorhome/doctorhome', $scope.doctor).success(function (response) {
  // console.log(response);
  // // alert("Registration completed!!!!");
  //
  //   //  refreshglobals();
  // });
};
  $scope.addDescription = function(){
      $location.path('/doctoraddpatienttype');
  // $http.post('/doctorhome/doctorhome', $scope.doctor).success(function (response) {
  // console.log(response);
  // // alert("Registration completed!!!!");
  //
  //   //  refreshglobals();
  // });
};
$scope.addPatienttype = function(){
    $location.path('/doctoradddiagnosis');
// $http.post('/doctorhome/doctorhome', $scope.doctor).success(function (response) {
// console.log(response);
// // alert("Registration completed!!!!");
//
//   //  refreshglobals();
// });
};
$scope.adddiagnosis = function(){
    $location.path('/doctoraddprocedure');
// $http.post('/doctorhome/doctorhome', $scope.doctor).success(function (response) {
// console.log(response);
// // alert("Registration completed!!!!");
//
//   //  refreshglobals();
// });
};
$scope.addprocedure = function(){
    $location.path('/doctoraddmedication');
// $http.post('/doctorhome/doctorhome', $scope.doctor).success(function (response) {
// console.log(response);
// // alert("Registration completed!!!!");
//
//   //  refreshglobals();
// });
};
$scope.addmedication = function(){
    $location.path('/doctoraddgoal');
// $http.post('/doctorhome/doctorhome', $scope.doctor).success(function (response) {
// console.log(response);
// // alert("Registration completed!!!!");
//
//   //  refreshglobals();
// });
};
$scope.addgoal = function(){
    $location.path('/doctoraddreminder');
// $http.post('/doctorhome/doctorhome', $scope.doctor).success(function (response) {
// console.log(response);
// // alert("Registration completed!!!!");
//
//   //  refreshglobals();
// });
};
$scope.addreminder = function(){
    $location.path('/doctorvisitsummery');
// $http.post('/doctorhome/doctorhome', $scope.doctor).success(function (response) {
// console.log(response);
// // alert("Registration completed!!!!");
//'/doctorvisitsummery',
//   //  refreshglobals();
// });
};
$scope.datepickerConfig = {
         allowFuture: false,
         dateFormat: 'DD/MM/YYYY'
     };
     $scope.gender = ['Male', 'Female'];
     $scope.service = ['Dental Checkup', 'Full Body Checkup','ENT Checkup','Heart Checkup'];

  var refreshrules = function () {
        $http.get('/doctorhome/doctorhome').success(function (response) {
            $scope.ruleslist = response;
              $scope.rules ="";
        });
    };
    refreshrules();


    $scope.addrules = function(){
    $http.post('/doctorhome/doctorhome', $scope.doctor).success(function (response) {
    console.log(response);
    alert("Registration completed!!!!");
        refreshrules();
    });
  };


});
