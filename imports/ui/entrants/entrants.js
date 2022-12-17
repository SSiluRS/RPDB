
import { Template } from 'meteor/templating';
import { Subjects, Faculties, Institutions, Entrants, Specializations } from '../../api/database.js';
import './entrants.html';

Template.entrants.onCreated(function(){    
  const instance = this
  instance.spec_by_fac_list = new ReactiveVar(Specializations.find({faculty:"n66NBCYq5yEpBmqvw"}));
});

Template.entrants.helpers({
  specs_by_fac(){
    return Template.instance().spec_by_fac_list.get()
  }
})

Template.entrants.events({
  'click .delete'() {   
    //console.log(this.elem._id);      
    Entrants.remove(this.elem._id);
  },
  'change #faculty_list'(event, instance){
    event.preventDefault();
    const target = event.target
    instance.spec_by_fac_list.set(Specializations.find({faculty:target.value}))  
    //console.log(instance.spec_by_fac_list.get())
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
    const faculty = target.faculty.value;
    const specialization = target.specialization.value;
    const institution = target.institution.value;
    const sex = target.sex.value;
    const grad_year = target.grad_year.value;
    const passport = target.passport.value;
    const enter_exam_group = target.enter_exam_group.value;
    const birthday = target.birthday.value;
    const nationality = target.nationality.value;
    
    //console.log(child);
    // Insert a task into the collection
    Entrants.insert({
      name: name,      
      surname: surname,
      patronymic: patronymic,
      faculty: faculty,
      specialization: specialization,
      nationality: nationality,
      institution: institution,
      sex: sex,
      grad_year: grad_year,
      passport: passport,
      enter_exam_group: enter_exam_group,
      birthday: (new Date(birthday+"Z")).toISOString(),
      address: address
    });

    // Clear form
    target.name.value = '';
    target.surname.value = '';
    target.patronymic.value = '';
    target.nationality.value = '';
    target.address.value = '';
    target.sex.value = '';
    target.grad_year.value = '';
    target.passport.value = '';
    target.enter_exam_group.value = '';
    target.birthday.value = '';
  },
});

