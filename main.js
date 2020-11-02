/*
{
    "content": "Test",
    "embeds": [
        {
            "title": "Test Embed",
            "description": "This is a test embed!",
            "color": 16711680
        }
    ]
},

Method: POST
*/

function post(e) {

var url = document.getElementById("webhookUrl").value
var params = { "content": document.getElementById("message").value }
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-type", "application/json");

xhr.send(params);

}
