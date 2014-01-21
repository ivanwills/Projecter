
Template.dates.dates = function() {
    var now = new Date;
    var dates = db.dates.find(
        { _id : {$gte : now.toISODate()} },
        { sort : {_id : 1}, limit : 7 }
    );

    if ( dates.count() < 7 ) {
        var last = now;
        dates.forEach(function() {
            last = new Date(this._id);
        });
        if ( last !== now ) {
            // TODO add one day
            last = last.addDays(1);
            console.warn('skip', last);
        }

        for ( var i = dates.count(); i + dates.count() < 7; i++ ) {
            console.warn(last);
            // TODO insert one day
            db.dates.insert({
                _id : last.toISODate(),
                date : last.toISODate(),
                class : last.getDay() === 0 || last.getDay() === 6 ? 'weekend' : '',
                hours : [
                    { hour : '00' },
                    { hour : '01' },
                    { hour : '02' },
                    { hour : '03' },
                    { hour : '04' },
                    { hour : '05' },
                    { hour : '06' },
                    { hour : '07' },
                    { hour : '08' },
                    { hour : '09' },
                    { hour : '10' },
                    { hour : '11' },
                    { hour : '12' },
                    { hour : '13' },
                    { hour : '14' },
                    { hour : '15' },
                    { hour : '16' },
                    { hour : '17' },
                    { hour : '18' },
                    { hour : '19' },
                    { hour : '20' },
                    { hour : '21' },
                    { hour : '22' },
                    { hour : '23' },
                ]
            });
            last = last.addDays(1);
        }
    }

    return dates;
}

Template.dates.date = function() {
}

Template.dates.date = function() {
}

Template.dates.date = function() {
}
