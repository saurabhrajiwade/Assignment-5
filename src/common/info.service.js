(function() {
  'use strict';

  angular.module('common')
  .service('infoService', infoService);

  function infoService () {
    var service = this;
    var user;



    service.register = function (userInfo) {
      user = userInfo;

    }

    service.getIsRegistered = function () {
      if (user) {
        return true;
      }
      else {
        return false;
      }
    }

    service.getUserInfo = function () {
      return user;
    }
  }

}());
