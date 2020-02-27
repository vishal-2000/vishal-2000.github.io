var url_segment = window.location.href.split('/');
var script_name = url_segment[url_segment.length - 1];
if (localStorage[script_name]) {
    localStorage[script_name] = parseInt(localStorage[script_name]) + 1;
}
else {
    localStorage[script_name] = 1;
}
document.getElementById('counter').innerHTML = localStorage[script_name];
/*document.write("You've had "+ localStorage[script_name] + " hits.");*/
