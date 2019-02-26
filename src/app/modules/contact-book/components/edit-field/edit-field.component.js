import template from './edit-field.component.html';

const editFieldComponent = {
  bindings: {
    label: '=',
    field: '=',
  },
  template: template,
  controller: function() {
    // this.details = false;
    // this.getFullName = function() {
    //   const name = this.item.name;
    //   return [name.title, name.first, name.last].join(' ');
    // };

    // this.getAddress = function() {
    //   const location = this.item.location;
    //   return [location.state, location.city, location.street].join(' ');
    // };
  }
}

export default editFieldComponent;
