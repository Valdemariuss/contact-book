function listCtrl ($scope, $http, contactsService) {
  contactsService.getContacts(20).then(() => {
    $scope.$apply( () => {
      $scope.contacts =  contactsService.contacts;
    })
  });
}

export default listCtrl;