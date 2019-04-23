function TrackEvents(eventname, eventpropval, userid, islogin) {
    var propertiesToBeSent = CommonTrackProperties(islogin);
    var eventproperties = {};

    if (eventpropval) {
        for (var item in eventpropval) {
            if (eventpropval[item]) {
                propertiesToBeSent[item] = eventpropval[item];
                eventproperties[item] = eventpropval[item];
            }
        }
    }
    switch (eventname) {
        case "identify":
            {
                FireSegmentIOIdentify(userid, eventproperties);
                break;
            }
        default:
            {
                FireSegmentIOTrack(eventname, propertiesToBeSent);
            }
    }
}

function TrackPageEvents(eventpropval, islogin) {
    var propertiesToBeSent = CommonTrackProperties(islogin);

    if (eventpropval) {
        for (var item in eventpropval) {
            if (eventpropval[item]) {
                propertiesToBeSent[item] = eventpropval[item];
            }
        }
    }
    FireSegmentIOPage("", propertiesToBeSent);
}

function TrackAlias(userid) {
    FireSegmentIOAlias(userid);
}

function FireSegmentIOIdentify(userid, traits) {
    traits = traits || null;
    if (userid) {
        if (traits != null) {
            analytics.identify(userid, traits);
        }
        else {
            analytics.identify(userid);
        }
    }
    else {
        analytics.identify(traits);
    }
    //clear traits
    analytics.ready(function () {
        analytics.user().traits({});
    });
}


function FireSegmentIOPage(pagename, properties) {
    try{
        properties = properties || null;
        if (properties != null) {
            analytics.page(pagename, properties);
        }
        else {
            analytics.page(pagename);
        }
    }
    catch(ex){
        console.log(ex);
    }
}

//The track API call is how you record any actions your users perform, along with any properties that describe the action.
function FireSegmentIOTrack(eventname, properties) {
    try{
        properties = properties || null;
        if (properties != null) {
            analytics.track(eventname, properties);
        }
        else {
            analytics.track(eventname);
        }
    }
    catch(ex){
        console.log(ex);
    }
}

function FireSegmentIOAlias(userid) {
    analytics.alias(userid);
}

function AsyncSegTrack(userId, isLoggedIn, userType) {
    //Loaded a page event
    TrackPageEvents({'Page Type': 'Product', 'Visitor Type': userType, 'userId': userId}, isLoggedIn);
}

function FireSignUpEvents(uuid) {
    if (uuid != '') {
        TrackAlias(uuid);
        TrackEvents("identify", null, uuid, true);
    }
}

function CommonTrackProperties(islogin) {
    var propertiesToBeSent = {
        'builder type':'Resume Wizard',
        'Platform': 'Web',
        'Feature Set': 'Resumes',
        'Login Status': islogin? 'TRUE':'FALSE'
    };

    return propertiesToBeSent;
}