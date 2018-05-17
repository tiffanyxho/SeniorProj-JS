// anchor links - may be handy later

// This link may be handy for solving the below problem: https://stackoverflow.com/questions/1947263/using-an-html-button-to-call-a-javascript-function?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
/* This link was used for the below commented code: https://www.w3schools.com/js/js_htmldom_nodes.asp
document.getElementById("real_fire_button").addEventListener("click", display_responses);

function display_responses(){
    var para = document.createElement("p");
    var node = document.createTextNode("TEXT:!!!");
    para.appendChild(node);
    var element = document.getElementsById("notification_text");
    element.appendChild(para);
}
*/

// Should display how many people pressed which button to users

var real_fire_button_clicks = 0, fire_drill_button_clicks = 0;
var dont_see_fire_button_clicks = 0, dont_hear_alarm_button = 0;
var last_button_clicked_id = "";

/* Trying to use an EventListener to increment responses instead of onclick in html
function main(){
    document.getElementById("real_fire_text").addEventListener("click", display_responses("real_fire_button"));    
}
document.getElementById("real_fire_text").addEventListener("click", display_responses("real_fire_button"));
*/

function display_responses(id){
    if (id === "real_fire_button"){
        real_fire_button_clicks += 1;
    }else if (id === "fire_drill_button"){
        fire_drill_button_clicks += 1;
    }else if (id ==="dont_see_fire_button"){
        dont_see_fire_button_clicks += 1;
    }else if (id === "dont_hear_alarm_button"){
        dont_hear_alarm_button += 1;
    }
    last_button_clicked_id = id;
    document.getElementById("real_fire_text").innerHTML = "Real fire: " + real_fire_button_clicks;
    document.getElementById("fire_drill_text").innerHTML = "It's a drill: " + fire_drill_button_clicks;
    document.getElementById("dont_see_fire_text").innerHTML = "Don't see fire: " + dont_see_fire_button_clicks;
    document.getElementById("dont_hear_alarm_text").innerHTML = "Don't hear alarm: " + dont_hear_alarm_button;
}

/*Clears the elemnts in a div*/
function clearBox(elementID){
    document.getElementById(elementID).innerHTML = "";
}

/* Links to help with adding back HTML for buttons... - might need to make a div to hold all of the removed content in the first div
 * https://www.abeautifulsite.net/adding-and-removing-elements-on-the-fly-using-javascript
 * https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript/3450726?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
 * 
 */


/**Server code - retrieving data to make usable - starts here*/
/**get method (equivalent of get method in requests library in python) */
function get(theUrl){
    var xmlHttp  =  new XMLHttpRequest();
    xmlHttp.open(  "GET", theUrl,false);  // false for synchronous request
    xmlHttp.send(  null  );
    return xmlHttp.responseText;
}

/*JS see_fire func*/
function see_fire(){
    var see_fire = get("http://localhost:5000/see_fire");
    return "JAVASCRIPT: I SEE FIRE!";
}

/*Get data from the python server to get the see fire count*/
function get_see_fire_count(){
    var see_fire = get("http://localhost:5000/get_see_fire_count");
    return see_fire;
}

/*JS fire_drill func */
function fire_drill(){
    var fire_drill = get("http://localhost:5000/fire_drill");
}

/*get the fire_drill count */
function get_fire_drill_count(){
    var fire_drill = get("http://localhost:5000/get_fire_drill_count");
    return fire_drill;
}

/*JS no_fire func*/
function no_fire(){
    var no_fire = get("http://localhost:5000/no_fire");
    return "DON'T SEE FIRE";
}

/*get the no_fire count */
function get_no_fire_count(){
    var no_fire = get("http://localhost:5000/get_no_fire_count");
    return no_fire;
}

/**JS no_alarm func */
function no_alarm(){
    no_alarm = get("http://localhost:5000/no_alarm");
    return "DON'T HEAR ALARM!";
}

/**get no_alarm count */
function get_no_alarm_count(){
    get_no_alarm = requests.get("http://localhost:5000/get_no_alarm_count");
    return get_no_alarm;
}
