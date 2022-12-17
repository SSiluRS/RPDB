
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { Subjects, Faculties, Specializations } from '../../api/database.js';
import './specializations.html';

var specializations_list;

var faculties_list;





Template.specializations.events({
  'click .delete'() {   
    //console.log(this.elem._id);      
    Specializations.remove(this.elem._id);
  },  
  'submit .my_form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const name = target.text.value;
    const faculty = target.select.value;
    //console.log(target.select.value);
    // Insert a task into the collection
    Specializations.insert({
      name: name,      
      faculty: faculty
    });

    // Clear form
    target.text.value = '';
  },
});

