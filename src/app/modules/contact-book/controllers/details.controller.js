function detailsCtrl ($scope, $http, $routeParams, contactsService) {
  const id = $routeParams.contactId;
  $scope.id = id;
  $scope.item = contactsService.getById(id);
}

export default detailsCtrl;
