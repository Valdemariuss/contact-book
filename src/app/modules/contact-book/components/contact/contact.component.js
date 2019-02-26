import template from './contact.component.html';

const contactComponent = {
  bindings: {
    item: '=',
    index: '=',
  },
  template: template,
  controller: function($scope, contactsService) {
    this.details = false;
    this.edit = true;
    this.getFullName = function() {
      const name = this.item.name;
      return [name.title, name.first, name.last].join(' ');
    };

    this.getAddress = function() {
      const location = this.item.location;
      return [location.state, location.city, location.street].join(' ');
    };

    $scope.update = contactsService.update;
  }
}

export default contactComponent;
