 
function changeBackground() {
    let color = document.querySelector('input[name="bgColor"]:checked').value;
    document.body.style.background = color;
}

function goToURL() {
    let url = document.getElementById('url').value;
    location.href = url;
}

function changeText() {
    let text = document.getElementById('myTextInput').value;
    document.getElementById("myText").innerText = text;
}