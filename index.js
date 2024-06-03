const body = document.getElementsByTagName("body")[0]  //document applies to the whole HTML document
body.style.backgroundColor = "purple"
// let/var is a way to create a dynamic variable which can change
// const is a way to create a variable that is not going to change 

function setC(name) {  //to set colour
    body.style.backgroundColor = name;
}  

function randomButton() {  //to set random colour for random button
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    
    const colour = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = colour;

}
