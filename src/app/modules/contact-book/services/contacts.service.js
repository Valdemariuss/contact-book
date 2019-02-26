import store from 'store';

function contactsService ($http, $resource) {

  this.contacts = store.get('contacts');

  this.getContactsData = (count) => {
    let contacts = $resource('https://randomuser.me/api/', {results: count});

    return contacts.get().$promise.then( (response) => {
      let data = response?.results,
        contacts = store.get('contacts') || [],
        newContacts = contacts.concat(data);
      store.set('contacts', newContacts );
    });
  };

  this.getContacts = (count = 50) => {
    let self = this,
      promeses = [],
      storeCount = self.contacts?.length || 0,
      needs = count - storeCount++;

    if(needs > 0 ){
        promeses.push( self.getContactsData(needs) );
    } else if (needs < 0 ) {
      store.set('contacts', this.contacts.slice(0, count) );
    }

    return Promise.all(promeses).then(() => {
      this.contacts = store.get('contacts');
    });
  };

  this.getById = (id) => {
    return this.contacts.find( item => item.login.uuid == id );
  };

  this.update = (item) => {
    const self = this,
      id = item.login.uuid,
      contact = self.getById(id);
    contact = item;
  };

}

export default contactsService;
