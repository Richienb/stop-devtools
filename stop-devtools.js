var opened = false;

setInterval(function() {

    var devtools = /./;

    devtools.toString = function() {

        opened = true;

    }

    console.log('%c', devtools);

    if (opened) {

        console.warn("Sorry, you can't use the development console in this website.");
        while (true) {
            debugger;
        }

    }

}, 1000);
