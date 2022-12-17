
import { Template } from 'meteor/templating';
import { Subjects, Faculties, Institutions, Entrants, Parents, Enter_exams_results } from '../../api/database.js';
import './enter_exams_results.html';


Template.enter_exams_results.events({
  'click .delete'() {   
    //console.log(this.elem._id);      
    Enter_exams_results.remove(this.elem._id);
  },  
  'submit .my_form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const id_enter = target.id_enter.value;
    const id_subj = target.id_subj.value;
    const classroom = target.classroom.value;
    const date = target.date.value;
    const score = target.date.value;
    console.log(id_enter)
    //Insert a task into the collection
    Enter_exams_results.insert({
      id_enter: id_enter,      
      id_subj: id_subj,
      classroom: classroom,
      score: score,     
      date: (new Date(date+"Z")).toISOString()
    });

    // Clear form
    target.classroom.value = '';
    target.score.value = '';
  },
});