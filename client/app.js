var app = angular.module('tatluApp', ['ngRoute','ngAnimate',"ng-fusioncharts", 'ngAria','ngMessages','ngMaterial','ngFlatDatepicker','ngCookies', 'ngStorage']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'

    }).when('/nav', {
        templateUrl: 'views/nav.html',
        controller: 'NavController'
      }).when('/profile', {
          templateUrl: 'views/profile.html',
          controller: 'profileController'
        }).when('/changepassword', {
            templateUrl: 'views/changepassword.html',
            controller: 'profileController'
    }).when('/usermanagement', {
        templateUrl: 'views/usermanagement.html',
        controller: 'UserManagementController'
        }).when('/userView', {
              templateUrl: 'views/userView.html',
              controller: 'UserManagementViewController'
    }).when('/formmanagement', {
        templateUrl: 'views/formmanagement.html',
        controller: 'formManagementController'
    }).when('/facility', {
        templateUrl: 'views/facility.html',
        controller: 'FacilityController'
    }).when('/procedure', {
        templateUrl: 'views/procedure.html',
        controller: 'ProcedureController'
    }).when('/visit', {
        templateUrl: 'views/visit.html',
        controller:'VisitController'
    }).when('/patient', {
        templateUrl: 'views/patient.html',
        controller:'PatientController'
    }) .when('/patientvisit', {
        templateUrl: 'views/patientvisit.html',
        controller:'PatientController'
    }).when('/allpatients', {
        templateUrl: 'views/allpatients.html',
        controller:'PatientController'
    }) .when('/appointment', {
        templateUrl: 'views/calender.html',
        controller:'appointmentController'
    }).when('/payment', {
        templateUrl: 'views/payments.html',
        controller:'paymentController'
    }) .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller:'PatientController'
    }) .when('/nursehome', {
        templateUrl: 'views/nursehome.html',
        controller:'PatientController'
    }) .when('/patienthome', {
        templateUrl: 'views/patienthome.html',
        controller:'PatientController'
    }).when('/visithistory', {
        templateUrl: 'views/visithistory.html',
        controller:'VisitController'
    }).when('/report', {
        templateUrl: 'views/reports.html',
        controller:'reportController'
    }).when('/reminders', {
        templateUrl: 'views/patientreminders.html',
        controller:'reminderController'
    }).when('/records', {
        templateUrl: 'views/healthrecords.html',
        controller:'recordsController'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller:'LoginController'
    }).when('/patientappointments', {
        templateUrl: 'views/patientappointments.html',
        controller:'patientappointmentController'
    }).when('/patienthistory', {
        templateUrl: 'views/patienthistory.html',
        controller:'profileController'
    }).when('/patient_demographics', {
        templateUrl: 'views/patient_demographics.html',
        controller: 'PatientdemoController'
    }).when('/notes', {
        templateUrl: 'views/notes.html',
        controller:'notesController'
    }).when('/medication', {
        templateUrl: 'views/medication.html',
        controller:'medicationController'
    }).when('/membership', {
        templateUrl: 'views/membership.html',
        controller:'MembershipController'
    }).when('/membertype', {
        templateUrl: 'views/membertype.html',
        controller:'memberselectController'
    }).when('/membershipPayment', {
        templateUrl: 'views/membershipPayment.html',
        controller:'membershipPaymentController'
    }).when('/rules', {
        templateUrl: 'views/rules.html',
        controller: 'rulesController'
    }).when('/alert', {
        templateUrl: 'views/alert.html',
        controller: 'alertController'
    }).when('/membershipplan', {
        templateUrl: 'views/membershipplan.html',
        controller:'membershipPaymentController'
    }).when('/sign-in', {
        templateUrl: 'views/sign-in.html',
        controller:'LoginController'
    }).when('/admin_report1', {
        templateUrl: 'views/admin_report1.html',
        controller:'admin_report1Controller'
    }).when('/admin_report2', {
        templateUrl: 'views/admin_report2.html',
        controller:'admin_report2Controller'
    }).when('/referrals', {
        templateUrl: 'views/referrals.html',
        controller:'PatientController'
    }).when('/patienttrackingboard', {
        templateUrl: 'views/patienttrackingboard.html',
        controller:'PatientController'
    }).when('/useractivities', {
          templateUrl: 'views/useractivities.html',
          controller: 'UserManagementViewController'
}).when('/filebackup', {
      templateUrl: 'views/filebackup.html',
      controller: 'UserManagementViewController'
}).when('/adminreminder', {
      templateUrl: 'views/adminreminders.html',
      controller: 'UserManagementViewController'
}).when('/usermanagement_doctor', {
        templateUrl: 'views/usermanagement_doctor.html',
        controller: 'UserManagementController'
    }).when('/usermanagement_call_center', {
       templateUrl: 'views/usermanagement_call_center.html',
       controller: 'UserManagementController'
    }).when('/usermanagement_facility_admin', {
        templateUrl: 'views/usermanagement_facility_admin.html',
        controller: 'UserManagementController'
    }).when('/usermanagement_front_desk', {
        templateUrl: 'views/usermanagement_front_desk.html',
        controller: 'UserManagementController'
    }).when('/usermanagement_nurse', {
        templateUrl: 'views/usermanagement_nurse.html',
        controller: 'UserManagementController'
    }).when('/userView_nurse', {
        templateUrl: 'views/userView_nurse.html',
        controller: 'UserManagementViewController'
    }).when('/userView_doctor', {
         templateUrl: 'views/userView_doctor.html',
         controller: 'UserManagementViewController'
    }).when('/userView_front_desk', {
          templateUrl: 'views/userView_front_desk.html',
          controller: 'UserManagementViewController'
    }).when('/userView_call_center', {
           templateUrl: 'views/userView_call_center.html',
           controller: 'UserManagementViewController'
    }).when('/userView_facility_admin', {
            templateUrl: 'views/userView_facility_admin.html',
            controller: 'UserManagementViewController'
    });
    
    
    
    
  });

  app.directive('navPage', function() {
  return {
    restrict: 'E',
    templateUrl: '/views/nav.html',
    controller:'NavController'
  };
});

app.factory('alert', function($uibModal) {

     function show(action, event) {
       return $uibModal.open({
         templateUrl: 'views/modalContent.html',
         controller: function() {
           var vm = this;
           vm.action = action;
           vm.event = event;
         },
         controllerAs: 'vm'
       });
     }

     return {
       show: show
     };

   });


app.directive('fileModel', ['$parse', function ($parse) {
     return {
        restrict: 'A',
        link: function(scope, element, attrs) {
           var model = $parse(attrs.fileModel);
           var modelSetter = model.assign;
  element.bind('change', function(){
     scope.$apply(function(){
        modelSetter(scope, element[0].files[0]);
     });
  });



        }
     };
  }]);


  app.service('fileUpload', ['$http', function ($http) {
this.uploadFileToUrl = function(file, uploadUrl){
 var fd = new FormData();
 fd.append('file', file);

 $http.post(uploadUrl, fd, {
    transformRequest: angular.identity,
    headers: {'Content-Type': undefined}
 })

 .success(function(){
 })

 .error(function(){
 });
}
}]);
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});


app.run(function($rootScope, $http, $location, $sessionStorage, $cookies) {
    if ($sessionStorage.tokenDetails) {
        $http.defaults.headers.common.Authorization = $sessionStorage.tokenDetails.token;
    }

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
        var publicPages = ['/', '/sign-in','/login', '/patient','/nav'];
           var patientPages = ['/','/login','/visithistory','/patienthistory','/report','/patientappointments','/patienthome','/patient_demographics','/membership','/procedure','/records','/reminders','/payment','/medication','/profile','/changepassword','/appointment'];

  var AdminPages=['/','/admin_report1','/nav','/referrals','/patienttrackingboard','/adminreminder','/filebackup','/useractivities','/userView','/visit','/dashboard','/patient','/payment','/allpatients','/membership','/allpatients','/membershipplan','/membershipPayment','/appointment','/changepassword','/membershipplan','/profile','/rules','/alert','/usermanagement','/facility','/medication','/managelayout','/procedure','/formmanagement',
                 '/usermanagement_call_center','/usermanagement_doctor','/usermanagement_facility_admin',
                         '/usermanagement_front_desk','/usermanagement_nurse','/userView_doctor','/userView_nurse',
                         '/userView_call_center','/userView_facility_admin','/userView_front_desk'];
  var doctorpages = ['/','/nav','/visit','/profile','/changepassword','/patientvisit','/patient','/payment','/medication','/allpatients'];
  var nursepages=['/','/nav','/visit','/nursehome','/patient_demographics','/patient','/patientvisit','/payment','/appointment','/profile','/changepassword'];
  var callcenterpages=['/','/nav','/nursehome','/appointment','/allpatients','/profile','/patient','/changepassword'];
  var frondeskpages=['/','/nav','/appointment','/nursehome','/patient','/allpatients','/profile','/changepassword'];
  var facilityadminpages=['/','/nav','/userView','/nursehome','/patient','/appointment','/allpatients','/usermanagement','/profile','/changepassword'];


        var authUser = $cookies.getObject('authUser');
        if (authUser != undefined) {
            var loggedInUser = authUser.currentUser.userInfo;
        }

        var restrictedPage = publicPages.indexOf($location.path()) === -1;
        if (restrictedPage && !$sessionStorage.tokenDetails && $location.path() != '') {
          // alert("Log In First");
            $location.path('/Unauthorized');

        }else{
          if (authUser != undefined) {
                       if(authUser.currentUser.userInfo.usertype==='Patient'){
                         var Patient = patientPages.indexOf($location.path()) === -1;
                         if(Patient){
                           $location.path('/Unauthorized');
                         }

                       }
                       if(authUser.currentUser.userInfo.usertype==='Admin'){
                         var Admin = AdminPages.indexOf($location.path()) === -1;
                         if(Admin){
                           $location.path('/Unauthorized');
                         }

                       }
                       if(authUser.currentUser.userInfo.usertype==='Doctor'){
                         var Doctor = doctorpages.indexOf($location.path()) === -1;
                         if(Doctor){
                           $location.path('/Unauthorized');
                         }

                       }
                       if(authUser.currentUser.userInfo.usertype==='Nurse'){
                         var Nurse = nursepages.indexOf($location.path()) === -1;
                         if(Nurse){
                           $location.path('/Unauthorized');
                         }

                       }
                       if(authUser.currentUser.userInfo.usertype==='Callcenter'){
                         var Callcenter = callcenterpages.indexOf($location.path()) === -1;
                         if(Callcenter){
                           $location.path('/Unauthorized');
                         }

                       }
                       if(authUser.currentUser.userInfo.usertype==='Frontdesk'){
                                var Frontdesk = frondeskpages.indexOf($location.path()) === -1;
                                if(Frontdesk){
                                  $location.path('/Unauthorized');
                                }

                              }
                              if(authUser.currentUser.userInfo.usertype==='FacilityAdmin'){
                                       var FacilityAdmin = facilityadminpages.indexOf($location.path()) === -1;
                                       if(FacilityAdmin){
                                         $location.path('/Unauthorized');
                                       }

                                     }
            }
        }

    });
});
