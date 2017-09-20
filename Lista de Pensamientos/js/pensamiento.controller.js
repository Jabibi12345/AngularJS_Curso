class AppPensamientoController{

    $onInit(){
        this.pensamiento = "";
        this.aPensamientos = [];
    }

    anadirPensamiento(pensamiento){
        this.aPensamientos.push(pensamiento);
        this.pensamiento = "";
    }

    removeItem (index) {
        this.aPensamientos.splice(index, 1);
    };

};

angular.module("appMain")
.controller("AppPensamientoController",AppPensamientoController);