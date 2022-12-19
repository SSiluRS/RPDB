
import { Template } from 'meteor/templating';
import { Subjects, Faculties, Institutions, Entrants, Parents } from '../../api/database.js';
import './parents.html';

var list;

Template.parents.onCreated(function(){      
  this.checkedParent = new ReactiveVar()
  this.parent = null
});

Template.parent_param.helpers({
  
  child_selected(child, child_id){
    return child == child_id ? 'selected' : ''
  }
})

Template.parents.helpers({
  checked(parent_id){
    return Template.instance().checkedParent.get() == parent_id
  },
})


Template.parents.events({
  'click .delete'() {   
    //console.log(this.elem._id);      
    Parents.remove(this.elem._id);
  },  
  'click .one_parent'(event,instance){
    event.preventDefault()
    const target = event.target
    if(instance.checkedParent.get() == target.id)
      instance.checkedParent.set(null)
    else
      instance.checkedParent.set(target.id)
    console.log(instance.checkedParent.get())
  },
  'submit .parent_info'(event) {
    event.preventDefault();
    const target = event.target;  
    const name = target.name.value;
    const surname = target.surname.value;
    const patronymic = target.patronymic.value;
    const address = target.address.value;
    const child = target.child.value;
    console.log(child)
    Parents.update({_id:Template.instance().checkedParent.get()},{$set:{'name':name}})
    Parents.update({_id:Template.instance().checkedParent.get()},{$set:{'surname':surname}})
    Parents.update({_id:Template.instance().checkedParent.get()},{$set:{'patronymic':patronymic}})
    Parents.update({_id:Template.instance().checkedParent.get()},{$set:{'address':address}})
    Parents.update({_id:Template.instance().checkedParent.get()},{$set:{'child':child}})
  },
  'submit .my_form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const name = target.name.value;
    const surname = target.surname.value;
    const patronymic = target.patronymic.value;
    const address = target.address.value;
    const child = target.child.value;
    console.log(child);
    // Insert a task into the collection
    Parents.insert({
      name: name,      
      surname: surname,
      patronymic: patronymic,
      address: address,
      child: child
    });

    // Clear form
    target.name.value = '';
    target.surname.value = '';
    target.patronymic.value = '';
    target.address.value = '';
  },
});