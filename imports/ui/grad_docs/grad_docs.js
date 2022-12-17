
import { Template } from 'meteor/templating';
import { Subjects, Faculties, Institutions, Entrants, Parents, Grad_docs } from '../../api/database.js';
import './grad_docs.html';


Template.grad_docs.events({
  'click .delete'() {   
    //console.log(this.elem._id);      
    Grad_docs.remove(this.elem._id);
  },  
  'submit .my_form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const number = target.number.value;
    const av_score = target.av_score.value;
    const type = target.type.value;
    const id_enter = target.id_enter.value;
    console.log(id_enter)
    //Insert a task into the collection
    Grad_docs.insert({
      number: number,      
      av_score: av_score,
      type: type,
      id_enter: id_enter
    });

    // Clear form
    target.number.value = '';
    target.av_score.value = '';
  },
});