const mongoose = require('mongoose');

//defining a model
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//create schema
const ContactsSchema = new Schema({
    email: {type:String,required:true,unique:true},
    name: {type:String, required:true},
    designation: {type:String, required:true},
    company: {type:String, required:true},
    industry: {type:String, required:true},
    phone: {type:Number, required:true},
    country: {type:String, required:true},
    useRef:{type: String}
})

const contactsModel = new mongoose.model("contacts", ContactsSchema);
module.exports = contactsModel;
