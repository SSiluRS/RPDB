import { Mongo } from 'meteor/mongo';
 
export const Subjects = new Mongo.Collection('subjects');
export const Faculties = new Mongo.Collection('faculties');
export const Institutions = new Mongo.Collection('institutions');
export const Specializations = new Mongo.Collection('specialization');
export const Entrants = new Mongo.Collection('entrants');
export const Parents = new Mongo.Collection('parents');
export const Grad_docs = new Mongo.Collection('grad_docs');
export const Enter_exams_results = new Mongo.Collection('enter_exams_results');