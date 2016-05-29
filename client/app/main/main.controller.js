'use strict';
(function(){

class MainComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('todoListMeanApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainComponent
  });

})();
