var app = angular.module('miniRouting');

app.controller('productsCtrl', function ($scope, $routeParams, productsServices) {
  if ($routeParams.id === 'socks') {
    $scope.productData = productsServices.sockData;
  } else if ($routeParams.id === 'shoes') {
    $scope.productData = productsServices.shoeData;

  }

});