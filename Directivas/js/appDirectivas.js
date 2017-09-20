angular.module("appMain")
.directive('appPie', function(){
    return {
        template : `
        <footer>
            <p><strong>{{autor}}</strong> - <i>Badajoz</i> - <b>2017  ©</b></p>
        </footer>
        `,
        restrict : 'AE',
        scope : {
            autor : '@autor'
        }
    }
})