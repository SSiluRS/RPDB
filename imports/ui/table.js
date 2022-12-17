import { Template } from 'meteor/templating';
 
import './table.html';
import './subjects/subjects.js';
import './faculties/faculties.js';
import './specializations/specializations.js';
import './institutions/institutions.js';
import './entrants/entrants.js';
import './parents/parents.js';
import './grad_docs/grad_docs.js';
import './enter_exams_results/enter_exams_results.js';

Template.table.onCreated(function(){
  const instance = this;
  console.log(this.view.parentView.parentView.parentView.templateInstance().cur_table.get());
  instance.cur_table = this.view.parentView.parentView.parentView.templateInstance().cur_table;
});

 


Template.table.helpers({  
  check_cur_table(table){
    //console.log(table);
    //console.log(Template.instance().cur_table.get());
    return table == Template.instance().cur_table.get();
  }
})