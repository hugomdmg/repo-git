function getData() {

}


function createUser() {

}


function changeColor() {
    document.getElementById("container").style.backgroundColor = `rgb(${cc()},${cc()},${cc()})`
}

function cc() {
    return parseInt(Math.random() * 255)
}