db = {
    config       : new Meteor.Collection("config"),
    dates        : new Meteor.Collection("dates"),
    sprints      : new Meteor.Collection("sprints"),
    releases     : new Meteor.Collection("releases"),
};

console.log('config      ', db.config.find().count() );
console.log('dates       ', db.dates.find().count() );
console.log('sprints     ', db.sprints.find().count() );
console.log('releases    ', db.releases.find().count() );

db.sprints.remove();
db.releases.remove();
db.sprints.insert({
    name : 'Sproint 0',
    start : new Date('2014-01-02'),
    end  : new Date('2014-01-10'),
    release : '2014.01.00',
});
db.sprints.insert({
    name : 'Sproint 1',
    start : new Date('2014-01-13'),
    end  : new Date('2014-01-24'),
    release : '2014.02.00',
});
db.sprints.insert({
    name : 'Sproint 2',
    start : new Date('2014-01-27'),
    end  : new Date('2014-02-07'),
    release : '2014.04.00',
});
db.sprints.insert({
    name : 'Sproint 3',
    start : new Date('2014-02-10'),
    end  : new Date('2014-02-21'),
    release : '2014.04.00',
});
db.releases.insert({
    name   : '2014.01.00',
    deploy : new Date('2014-02-10'),
    tsr    : new Date('2014-02-21'),
});
db.releases.insert({
    name   : '2014.01.00',
    deploy : new Date('2014-02-10'),
    tsr    : new Date('2014-02-21'),
});
db.releases.insert({
    name   : '2014.01.00',
    deploy : new Date('2014-02-10'),
    tsr    : new Date('2014-02-21'),
});
db.releases.insert({
    name   : '2014.01.00',
    deploy : new Date('2014-02-10'),
    tsr    : new Date('2014-02-21'),
});
db.releases.insert({
    name   : '2014.01.00',
    deploy : new Date('2014-02-10'),
    tsr    : new Date('2014-02-21'),
});
