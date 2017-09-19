class AppPensamientoController{

    $onInit(){
        this.pensamiento = "";
        this.aPensamientos = [];
    }

    anadirPensamiento(pensamiento){
        this.aPensamientos.push(pensamiento);
    }

};

angular.module("appMain")
.controller("AppPensamientoController",AppPensamientoController);
