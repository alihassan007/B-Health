var myapp=angular.module('Commande', []);

    myapp.controller('commandeController', ['$scope', function($scope) {

        $scope.articles = [
               { reference: 12, s: 0, xxs: 0, xs: 0, m: 0, l: 0, xl:0, xxl:0, xxxl: 0, quantite: 0}
               
        ];



        $scope.PrixTotalTTC = function() {
            var resultTTC = 0;

            angular.forEach($scope.articles, function (article) {
                resultTTC += article.montantTTC * article.quantite;
            });
            return resultTTC;
        };

        $scope.PrixTotalHT = function() {
            var resultHT = 0;

            angular.forEach($scope.articles, function (article) {
                resultHT += article.montantHT * article.quantite;
            });
            return resultHT;
        };

        $scope.NombreArticle = function() {
            var resultArticle = 0;

            angular.forEach($scope.articles, function(article){
                resultArticle += article.quantite;
            });
            return resultArticle;
        };
        $scope.SombreArticle = function() {
            var sesultArticle = 0;

            angular.forEach($scope.articles, function(article){
                sesultArticle += article.s;
            });
            return sesultArticle;
        };
         $scope.XSombreArticle = function() {
            var xsesultArticle = 0;

            angular.forEach($scope.articles, function(article){
                xsesultArticle += article.xs;
            });
            return xsesultArticle;
        };
         $scope.MombreArticle = function() {
            var mesultArticle = 0;

            angular.forEach($scope.articles, function(article){
                mesultArticle += article.m;
            });
            return mesultArticle;
        };
         $scope.LombreArticle = function() {
            var lesultArticle = 0;

            angular.forEach($scope.articles, function(article){
                lesultArticle += article.l;
            });
            return lesultArticle;
        };
         $scope.XLombreArticle = function() {
            var xlesultArticle = 0;

            angular.forEach($scope.articles, function(article){
                xlesultArticle += article.xl;
            });
            return xlesultArticle;
        };
         $scope.XXLombreArticle = function() {
            var xxlesultArticle = 0;

            angular.forEach($scope.articles, function(article){
                xxlesultArticle += article.xxl;
            });
            return xxlesultArticle;
        };
        $scope.XXXLombreArticle = function() {
            var xxxlesultArticle = 0;

            angular.forEach($scope.articles, function(article){
                xxxlesultArticle += article.xxxl;
            });
            return xxxlesultArticle;
        };
        $scope.XXSombreArticle = function() {
            var xxsesultArticle = 0;

            angular.forEach($scope.articles, function(article){
                xxsesultArticle += article.xxs;
            });
            return xxsesultArticle;
        };
        $scope.totalArticle = function() {
            totalArticle = 0;

            angular.forEach($scope.articles, function(article){
                totalArticle += article.xxs+article.s+article.xs+article.m+article.l+article.xxxl+article.xxl+article.xl;
            });
            return totalArticle;
        };


        $scope.AjouterArticle = function() {
            $scope.articles.push({
            
                reference: '',
                xxs: 0,
                xs: 0,
                s: 0,
                m: 0,
                l: 0,
                xl: 0,
                xxl: 0,
                xxxl: 0,
                prixUnitaire: 0,
                quantite: 0,
                montantHT: 0,
                montantTTC: 0
            
            });
        };

        $scope.SupprimerArticle = function(index) {
            $scope.articles.splice(index, 1);
        };

    }]);
    


         myapp.controller('myCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
            $scope.uploadFile = function(){
               var file = $scope.myFile;
               
               console.log('file is ' );
               console.dir(file);
               
               var uploadUrl = "/fileUpload";
               fileUpload.uploadFileToUrl(file, uploadUrl);
            };
         }]);