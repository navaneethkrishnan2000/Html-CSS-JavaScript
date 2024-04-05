const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const wrap = document.getElementById("wrap")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


function randomHexValue() {
    let randomIndex = Math.floor(Math.random()*16)  
    return hex[randomIndex]
    //this gives random numbers within 16, floor is used to round the element, 
    //so we get random decimal less numbers and storing that number in a variable
    //and returning it as a array index num
}

//adding an event listener
btn.addEventListener('click',changeBg)

function changeBg() {
    let hexColor ='#'
    for (let i=1;i<=6;i++){
        hexColor = hexColor + randomHexValue()
    }
    //using for loop we create 6 random values and make it as a hexcode to generate bg
    // console.log(hexColor)
    wrap.style.backgroundColor = hexColor
    //changing beackground of the web page in the js, here in the place of hexcolor we have to set a color, here we are giving the hexcode of the colors
    colortext.innerHTML = hexColor
    // to show the changing color of the background
}




