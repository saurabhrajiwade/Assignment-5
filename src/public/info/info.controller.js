(function() {
  'use strict';

  angular.module('public')
  .controller('infoController', infoController);

  infoController.$inject = ['infoService', 'MenuService', 'ApiPath'];
  function infoController (infoService, MenuService, ApiPath) {
    var $ctrl = this;

    $ctrl.imagePath = ApiPath;
    //console.log("src : ",$ctrl.imagePath);
    $ctrl.menuItems = {};
    $ctrl.isRegistered = infoService.getIsRegistered();

    $ctrl.user = infoService.getUserInfo();

    if($ctrl.isRegistered) {
      MenuService.getMenuItem($ctrl.user['favoriteMenu'])
      .then(function (response) {
        //console.log('response: ',response)

        $ctrl.menuItems = response;
      //  console.log('response',$ctrl.menuItems);
      })
    }
  }
}());
