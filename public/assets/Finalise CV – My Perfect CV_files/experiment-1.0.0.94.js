
var currentUrl = document.location.hostname + document.location.pathname;

function onRouteChange() {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
        type: 'activate'
    });
};



function TrackOptimizelyEvents(eventname) {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
        type: 'event',
        eventName: eventname
    });
};


function onPotentialRouteChange() {
    window.setTimeout(function () {
        var newUrl = document.location.hostname + document.location.pathname;
        if (newUrl !== currentUrl) {
            onRouteChange();
        }
        currentUrl = newUrl;
    }, 10);
};

function init(history) {
    var pushState = history.pushState;
    history.pushState = function (state) {
        if (typeof history.onpushstate == "function") {
            window.onpopstate({
                state: state
            });
        }
        return pushState.apply(history, arguments);
    };
}

window.onload = function () {
    init(window.history);
    history.onpushstate = onPotentialRouteChange;
    window.onpopstate = onPotentialRouteChange;
};