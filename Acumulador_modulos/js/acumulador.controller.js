class AppAcumuladorController{

    $onInit(){
        this.numero = 0;
        this.total = 0;
        this.visible = false;
    }

    aumentar(){
        this.visible = false;
        this.total = this.total + this.numero;
        if(this.total >= 100){
            this.visible = true;
        }
    }

    decrementar(){
        this.visible = false;
        this.total = this.total - this.numero;
        if(this.total >= 100){
            this.visible = true;
        }
    }

};

angular.module("appMain")
.controller("AppAcumuladorController",AppAcumuladorController);
