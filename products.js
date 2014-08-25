(function(){
  var app = angular.module('store-products', []);
  // custom element directive
  app.directive('productTitle', function(){
    return {
      restrict: 'E', //type of directive (E for element)
      templateUrl: 'product-title.html' //Url of a template
    };
  });

  // if we wanted to use attribute directive
  // app.directive('productTitle', function(){
  //   return {
  //     restrict: 'A', //(A for attribute)
  //     templateUrl: 'product-title.html'
  //   };
  // });
  // would put <h3 product-title></h3> in index.html

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller:function(){

      },
      controllerAs: 'panels'
    };
  });
})();