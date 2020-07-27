(function() {
  'use strict';

  angular.module('public')
  .controller('signupController', signupController);

  signupController.$inject = ['infoService', 'MenuService'];
  function signupController (infoService, MenuService) {
    var ctrl = this;

    ctrl.register = function () {
      MenuService.getMenuItem(ctrl.favoriteMenu)
      .then(function (response) {
        //console.log('register response:', response.status);
        if(response.status != 500){
          infoService.register({
            firstName: ctrl.firstname,
            lastName: ctrl.lastname,
            email: ctrl.email,
            phone: ctrl.phoneNumber,
            favoriteMenu: ctrl.favoriteMenu
          });
          ctrl.isRegistered = true;
          ctrl.isMenuItemNotFound = false;
        }

        // if not found
        else {
          //console.log('OnRegister: Item not found.');
          ctrl.isMenuItemNotFound = true;
          ctrl.isRegistered = false;
        }
      })
    }
  }
}());
