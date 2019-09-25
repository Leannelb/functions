// ES6 language features: Default Parameters

var container = document.getElementById('container');

function countdown(inital, final, interval ) {
    var current = inital;

    while( current > final ){
        container.innerHTML = current;
        current -= interval;
    }

}
//if we think  final and interval will most always be, say 0 and 1, we can give them as defaults
countdown(10, 0, 1 );




/*
 * ES6 language features: Default Parameters
 * See Below for default param answer
 * */

var container = document.getElementById('container');

function countdown(inital, final = 0 , interval = 1 ) {
    // here im specifying 0 and 1 as the defaults unless otherwise stated.
    var current = inital;

    while( current > final ){
        container.innerHTML = current;
        current -= interval;
    }

}
//if we think  final and interval will most always be, say 0 and 1, we can give them as defaults
//examples of use below:

countdown(10 );
countdown( 100, 6);
countdown( 100, 6, 4);






/*
 * Why does this es6 feature work???
 *
 * See below for what it complies down to in JS - hence why the shorthand works
 * */

var container = document.getElementById('container');
function countdown(inital, final, interval ) {
if ( final === void 0 ) {final == 0 }
if ( interval === void 0 ) { interval = 1 }
    var current = inital;

    while( current > final ){
        container.innerHTML = current;
        current -= interval;
    }

}
//if we think  final and interval will most always be, say 0 and 1, we can give them as defaults
countdown(10, 0, 1 );

