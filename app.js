(function(){

  var app = angular.module('store', []);
          // AngularJS   (App Name,  Dependencies)

  app.controller('StoreController', function(){
    this.products = [
      {
        name: 'Awesome Multi-touch Keyboard',
        price: 250.00,
        description: "...",
        reviews: [
          {
            stars: 5,
            body: "I love this product!",
            author: "joe@thomas.com"
          },
          {
            stars: 1,
            body: "This product sucks",
            author: "tim@hater.com"
          }
        ]
      }
    ];
  });

  // var gems = [
  // {
  //   name: 'Dodecahedron',
  //   price: 2,
  //   description: '...',
  //   canPurchase: true,
  //   soldOut: false
  // },
  // {
  //   name: "Pentagonal Gem",
  //   price: 5.95,
  //   description: "...",
  //   canPurchase: true,
  //   soldOut: false,
  //   // images: [
  //   //   {
  //   //     full: 'dodecahedron-01-full.jpg',
  //   //     thumb: 'dodecahedron-01-thumb.jpg'
  //   //   },
  //   //   {
  //   //     full: 'dodecahedron-02-full.jpg',
  //   //     thumb: 'dodecahedron-02-thumb.jpg'
  //   //   },
  //   // ]
  // }
  // ];

  app.controller("PanelController", function(){
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review); //pushes review into that product's reviews array
      this.review = {}; //clears form
    };
  });

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