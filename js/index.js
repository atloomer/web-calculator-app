var myApp = angular.module('priceApp',[]);

myApp.controller('CartCtrl', ['$scope', function($scope) {
  $scope.categories = [
    {
      name: "",
      products: [
        {
          questionNumber: "1/7",
          name: "Do you own a domain name?",
          options: [
            {name: "Yes", price: 300, selected: false},
            {name: "No", price: 325, selected: false}
          ] 
        },
        {
          questionNumber: "2/7",
          name: "How many pages do you need?",
          options: [
            {name: "1 - 2", price: 50, selected: false},
            {name: "3 - 6", price: 100, selected: false},
            {name: "7 plus", price: 300, selected: false}
          ] 
        },
        {
          questionNumber: "3/7",
          name: "How much content do you need written?",
          options: [
            {name: "None", price: 0, selected: false},
            {name: "A small amount", price: 50, selected: false},
            {name: "All of it", price: 200, selected: false}
          ] 
        },
        {
          questionNumber: "4/7",
          name: "How many email accounts do you need?",
          options: [
            {name: "None", price: 0, selected: false},
            {name: "1", price: 70, selected: false},
            {name: "2", price: 140, selected: false},
            {name: "3 or more", price: 250, selected: false}
          ] 
        },
        {
          questionNumber: "5/7",
          name: "Do you need custom development?",
          subName: "This could include animations, page transitions, 3rd party integrations, etc.",
          options: [
            {name: "Yes", price: 200, selected: false},
            {name: "No", price: 0, selected: false}
          ] 
        },
        {
          questionNumber: "6/7",
          name: "Do you need e-commerce solutions?",
          options: [
            {name: "Yes", price: 500, selected: false},
            {name: "No", price: 0, selected: false}
          ] 
        },
        {
          questionNumber: "7/7",
          name: "Do you need images provided for you?",
          options: [
            {name: "No, I have my own images", price: 0, selected: false},
            {name: "Yes, stock images will do", price: 50, selected: false},
            {name: "Yes, I would like to you to take photos for me", price: 200, selected: false}
          ] 
        }
      ]
    },
  ];

  $scope.total = 0;

  $scope.update = function () {
    var total = 0,
        categories = $scope.categories,
        tempOption;

    for (cat in categories) {
      for (prod in categories[cat].products) {
        tempOption = categories[cat].products[prod].selected;
        console.log(tempOption);
        total += tempOption ? parseFloat(tempOption) : 0; 
      }
    }

    $scope.total = total;
  };

  $scope.clear = function () {
    var categories = $scope.categories;
    $scope.total = 0;

    for (cat in categories) {
      for (prod in categories[cat].products) {
        tempOption = categories[cat].products[prod].selected = null;
      }
    }
  };
}]);