import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Faculties, Institutions, Specializations, Subjects } from '../api/database.js';
import './table.js'
import './users/user.js'
import './body.html'
import '../api/globalHelpers.js'


 
Template.body.helpers({ 
  table_name_list(){
    return ["entrants","faculties", "institutions", "specializations", "subjects",  "parents", "grad docs", "enter exams results", "exam scores", "school scores"];
  },
  isDashboard(){
    return Template.instance().admin_dashboard.get()
  }
});


Template.body.onCreated(function(){      
  this.cur_table = new ReactiveVar("entrants");
  this.admin_dashboard = new ReactiveVar(false)
});

Template.body.events({  
  'change #table_in_list'(event, instance){
    event.preventDefault();
    const target = event.target;
    const text = target.value;
    instance.cur_table.set(text);
    //console.log(target.value)
  },
  'click #admin_dash'(event,instance){
    event.preventDefault()
    const target = event.target
    instance.admin_dashboard.set(!(instance.admin_dashboard.get()))
  }
});