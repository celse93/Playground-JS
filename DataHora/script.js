let dataActual = new Date ();

let day = dataActual.getDate();
let month = dataActual.getMonth()+1;
let year = dataActual.getFullYear();
let hours = dataActual.getHours();
let minutes = dataActual.getMinutes();

let dataNewFormat = '0' + day + '/0' + month + '/' + year + ' ' + hours + ':' + minutes;

document.getElementById('DateTime').innerHTML = dataNewFormat;