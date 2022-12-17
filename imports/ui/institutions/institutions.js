
import { Template } from 'meteor/templating';
import { Subjects, Faculties, Institutions } from '../../api/database.js';
import './institutions.html';

var list;



Template.institutions.events({
  'click .delete'() {   
    //console.log(this.elem._id);      
    Institutions.remove(this.elem._id);
  }, 
  'submit .my_form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const name = target.text.value;
    //console.log(name);
    // Insert a task into the collection
    Institutions.insert({
      name
    });

    // Clear form
    target.text.value = '';
  }, 
});
