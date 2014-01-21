Meteor.subscribe('config');
Meteor.subscribe('dates');
db = {
    config       : new Meteor.Collection("config"),
    dates        : new Meteor.Collection("dates"),
};

Template.footer.copyright = function () {
    var title = db.config.findOne({name : "copyright"});
        return title ? title.value : 'Ivan Wills ' + (new Date).getFullYear();
};

