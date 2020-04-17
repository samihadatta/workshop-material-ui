// console.log('starting up!');
// const $ = require('jquery'); // es5 syntax for importing jquery
import $ from 'jquery'; // change require to es6 import style
import './style.scss'; // import everything to app to be used
// $('#main').html('Here we go!');

let count = 0;
setInterval(() => {
    $('#main').html(`You've been on this page for ${count} seconds.`);
    // eslint-disable-next-line no-plusplus
    count++;
}, 1000);
