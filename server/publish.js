db = {
    config       : new Meteor.Collection("config"),
    dates        : new Meteor.Collection("dates"),
};

console.log('config      ', db.config.find().count() );
console.log('dates       ', db.dates.find().count() );
