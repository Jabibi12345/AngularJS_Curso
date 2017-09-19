angular.module("appMain")
.controller("AppMainController",AppMainController);

function AppMainController(){
    
        this.userName={
            name:'Javi',
            apellidos: 'AL'
        };
        this.curso='AngularJS';
    
        this.borrar = function(){
            this.userName.name = '';
            this.userName.apellidos = '';
        }
}