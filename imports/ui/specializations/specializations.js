
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { Subjects, Faculties, Specializations } from '../../api/database.js';
import './specializations.html';


Template.specializations.onCreated(function(){      
  this.checkedSpec = new ReactiveVar()
  
});

Template.spec_param.helpers({
  
  fac_selected(faculty, fac_id){
    console.log(faculty)
    console.log(fac_id)
    return faculty == fac_id ? 'selected' : ''
  }
})

Template.specializations.helpers({
  checked(spec_id){
    return Template.instance().checkedSpec.get() == spec_id
  },
})

Template.specializations.events({
  'click .delete'() {   
    //console.log(this.elem._id);      
    Specializations.remove(this.elem._id);
  } ,  
  'click .one_spec'(event,instance){
    event.preventDefault()
    const target = event.target
    if(instance.checkedSpec.get() == target.id)
      instance.checkedSpec.set(null)
    else
      instance.checkedSpec.set(target.id)
    //console.log(instance.checkedParent.get())
  },
  'submit .spec_info'(event) {
    event.preventDefault();
    const target = event.target;  
    const name = target.name.value;
    const faculty = target.faculty.value;
    Specializations.update({_id:Template.instance().checkedSpec.get()},{$set:{'name':name}})
    Specializations.update({_id:Template.instance().checkedSpec.get()},{$set:{'faculty':faculty}})
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

