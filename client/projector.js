Meteor.subscribe('config');
Meteor.subscribe('groups');
Meteor.subscribe('abbreviations');
db = {
    config       : new Meteor.Collection("config"),
    groups       : new Meteor.Collection("groups"),
    abbreviations : new Meteor.Collection("abbreviations")
};

Template.footer.copyright = function () {
        var title = db.config.findOne({name : "copyright"});
            return title ? title.value : 'Ivan Wills 2013';
};

