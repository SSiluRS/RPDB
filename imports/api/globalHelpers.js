import { Template } from 'meteor/templating';
import { Entrants, Faculties, Grad_docs, Institutions, Parents, Specializations, Subjects, Enter_exams_results } from './database.js';

var faculty;

Template.registerHelper('faculty_name',function(elem){
  
  var name = Faculties.findOne({_id: elem}); 
  //console.log(faculty_n);
  return name["name"];
})

Template.registerHelper('subject_name',function(elem){
  
  var name = Subjects.findOne({_id: elem}); 
  //console.log(faculty_n);
  return name["name"];
})

Template.registerHelper('specialization_name',function(elem){
  
  var name = Specializations.findOne({_id: elem}); 

  //console.log(faculty_n);
  return name["name"];
})

Template.registerHelper('institution_name',function(elem){
  
  var name = Institutions.findOne({_id: elem}); 

  //console.log(faculty_n);
  return name["name"];
})

Template.registerHelper('entrant_name',function(elem){
  
  var entrant = Entrants.findOne({_id: elem}); 

  //console.log(faculty_n);
  return entrant["name"] + " " + entrant["surname"];
})

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD.MM.YYYY');
});

Template.registerHelper('faculties',function(elem){   
  return Faculties.find({});
})

Template.registerHelper('specializations',function(elem){   
  return Specializations.find({});
})

Template.registerHelper('entrants',function(elem){   
  return Entrants.find({});
})

Template.registerHelper('institutions',function(elem){   
  return Institutions.find({});
})

Template.registerHelper('subjects',function(elem){   
  return Subjects.find({});
})

Template.registerHelper('parents',function(elem){   
  return Parents.find({});
})


Template.registerHelper('grad_docs',function(elem){   
  return Grad_docs.find({});
})

Template.registerHelper('enter_exams_results',function(elem){   
  return Enter_exams_results.find({});
})

