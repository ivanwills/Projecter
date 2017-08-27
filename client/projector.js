Meteor.subscribe('config');
Meteor.subscribe('dates');
Meteor.subscribe('sprints');
Meteor.subscribe('releases');
db = {
    config       : new Meteor.Collection("config"),
    dates        : new Meteor.Collection("dates"),
    sprints      : new Meteor.Collection("sprints"),
    releases     : new Meteor.Collection("releases"),
};

Template.footer.copyright = function () {
    var title = db.config.findOne({name : "copyright"});
        return title ? title.value : 'Ivan Wills ' + (new Date).getFullYear();
};

Template.filter.sprints = function () {
    return db.sprints.find();
};

