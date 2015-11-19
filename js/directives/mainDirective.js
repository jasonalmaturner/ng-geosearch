angular.module('myApp').directive('mainDirective', function ($uibModal) {

  return {
    templateUrl: 'templates/resultTmpl.html',
    replace: true,
    scope: {
      data: '=',
      addFav: '&',
      images: "="
    },
    link: function (scope, elem, attrs) {
      console.log(scope.data);
      elem.on('click', function () {
        elem.css('opacity', '.5');
        var modalInstance = $uibModal.open({
          animation: scope.animationsEnabled,
          controller: 'modalCtrl',
          /*windowClass: 'large-Modal',*/
          resolve: {
            data: function () {
              return scope.data;
            }
          },
          templateUrl: 'templates/modal.html',
          size: 'lg'
        });
      });

    }
  }

});
