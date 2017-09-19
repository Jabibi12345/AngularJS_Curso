class AppAutoresController{

    $onInit(){
        this.listOrden = ["nombre","apellido","pais","fecha"];
        this.listGeneros = [
            {
                id:1,
                value: "Épico"
            },{
                id:2,
                value: "Lírico"
            },{
                id:3,
                value: "Drama"
            },{
                id:4,
                value: "Policíaco"
            }];
        this.autores = [
            {
                nombre : "Pepe",
                apellido : "Apellido1",
                fecha : new Date(1991,3,3),
                pais : "ES",
                generos : ["Épico","Lírico"]
            },
            {
                nombre : "Juan",
                apellido : "Apellido2",
                fecha : new Date(1977,9,19),
                pais : "UK",
                generos : ["Drama"]
            },
            {
                nombre : "Miguel",
                apellido : "Apellido3",
                fecha : new Date(1989,9,29),
                pais : "IT",
                generos : ["Drama","Lírico", "Épico"]
            },
            {
                nombre : "Fran",
                apellido : "Apellido4",
                fecha : new Date(1957,10,25),
                pais : "FR",
                generos : ["Lírico"]
            },
            {
                nombre : "Lucia",
                apellido : "Apellido5",
                fecha : new Date(1987,5,19),
                pais : "US",
                generos : ["Drama","Lírico"]
            }
        ];
       
    }
    
    change(){

    }

};

angular.module("appMain")
.controller("AppAutoresController",AppAutoresController);
