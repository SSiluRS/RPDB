
import { Template } from 'meteor/templating';
import { Subjects, Faculties, Institutions, Entrants, Parents } from '../../api/database.js';
import './parents.html';

var list;


Template.parents.events({
  'click .delete'() {   
    //console.log(this.elem._id);      
    Parents.remove(this.elem._id);
  },  
  'submit .my_form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const name = target.name.value;
    const surname = target.surname.value;
    const patronymic = target.patronymic.value;
    const address = target.address.value;
    const child = target.child.value;
    console.log(child);
    // Insert a task into the collection
    Parents.insert({
      name: name,      
      surname: surname,
      patronymic: patronymic,
      address: address,
      child: child
    });

    // Clear form
    target.name.value = '';
    target.surname.value = '';
    target.patronymic.value = '';
    target.address.value = '';
  },
});