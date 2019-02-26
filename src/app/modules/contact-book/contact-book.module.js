import contactsService from './services/contacts.service';

import contactComponent from './components/contact/contact.component';
import editFieldComponent from './components/edit-field/edit-field.component';


import listCtrl from './controllers/list.controller';
import detailsCtrl from './controllers/details.controller';

import detailsTemplate from './views/details.html';
import listTemplate from './views/list.html';

angular.module('contactBookApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])
  .component('contact', contactComponent)
  .component('editfield', editFieldComponent)
  .service('contactsService', contactsService)
  .config( function($routeProvider) {
    $routeProvider.when('/contact/:contactId', {
        template: detailsTemplate,
        controller: detailsCtrl
    });

    $routeProvider.when('/list', {
        template: listTemplate,
        controller: listCtrl
    });

   $routeProvider.otherwise({redirectTo: '/list'});
  });

