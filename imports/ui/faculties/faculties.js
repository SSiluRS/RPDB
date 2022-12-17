
import { Template } from 'meteor/templating';
import { Subjects, Faculties } from '../../api/database.js';
import './faculties.html';

var faculties_list;



Template.faculties.events({
  'click .delete'() {   
    //console.log(this.elem._id);      
    Faculties.remove(this.elem._id);
  },
  'submit .my_form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const name = target.text.value;
    //console.log(name);
    // Insert a task into the collection
    Faculties.insert({
      name
    });

    // Clear form
    target.text.value = '';
  },
  
});