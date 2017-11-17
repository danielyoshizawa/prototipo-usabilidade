
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    $scope.bigBobs = { nome: "Big Bobs", preco: 8.00, qtd:0 }
    $scope.bobsBurger = { nome: "Bobs Burger", preco: 7.50, qtd:0 }
    $scope.cancerBurger = { nome: "Cancer Burger", preco: 10.00, qtd:0 }
    $scope.bobsSorvete = { nome: "Bobs Sorvete", preco: 3.00, qtd:0 }
    $scope.bobinho = { nome: "Bobinho", preco: 4.50, qtd:0 }
    $scope.bobsBobs = { nome: "Bob's Bob's", preco: 15.00, qtd:0 }
    $scope.burgerBobs = { nome: "Burger Bob's", preco: 25.00, qtd:0 }
    $scope.bobComida = { nome: "Bob's Comida", preco: 6.50, qtd:0 }
    $scope.bigMac = { nome: "Big Mac", preco: 6.66, qtd:0 }

    $scope.burgers = [
        $scope.bigBobs,
        $scope.bobsBurger,
        $scope.cancerBurger,
        $scope.bobsSorvete,
        $scope.bobinho,
        $scope.bobsBobs,
        $scope.burgerBobs,
        $scope.bobComida,
        $scope.bigMac
    ];

    $scope.filtro = function(item){
        return item.qtd > 0;
    }

    $scope.getTotal = function(){
        var total = 0;
        for(var i = 0; i < $scope.burgers.length; i++){
            var burger = $scope.burgers[i];
            if(burger.qtd > 0)
                total += (burger.preco * burger.qtd);
        }
        return total;
    }

});

