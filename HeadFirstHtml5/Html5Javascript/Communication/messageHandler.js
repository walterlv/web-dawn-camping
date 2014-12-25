window.onload = function() {
    var url = "http://localhost:4008/Communication/test.json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        if (request.status === 200) {
            updateMessages(request.responseText);
        } else if (request.status === 404) {
            updateMessages("404: Page Not Found");
        }
    }
    request.send(null);
}

function updateMessages(text) {
    var messageDiv = document.getElementById("messages");
    messageDiv.innerHTML = text;
}