class AppMainController{
    
//    constructor(){
//        
//    }
    
    $onInit(){
        this.userName = {
            name: 'Javi',
            apellidos: 'AL'
        };
        this.curso = 'AngularJS';
    }

    borrar (){
        this.userName.name = '';
        this.userName.apellidos = '';
    }

};

angular.module("appMain")
.controller("AppMainController",AppMainController);
