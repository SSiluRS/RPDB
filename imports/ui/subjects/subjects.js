
import { Template } from 'meteor/templating';
import { Subjects, Faculties } from '../../api/database.js';
import './subjects.html';

var subjects_list;



Template.subjects.events({
  'click .delete'() {   
    //console.log(this.elem._id);      
    Subjects.remove(this.elem._id);
  },  
  'submit .my_form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const name = target.text.value;
    //console.log(name);
    // Insert a task into the collection
    Subjects.insert({
      name
    });

    // Clear form
    target.text.value = '';
  },
});



