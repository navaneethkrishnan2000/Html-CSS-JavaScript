const inputText = document.querySelector(".input input");
const btn = document.querySelector(".input button");
let infoText = document.querySelector(".info-text");
let filterInput;

btn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    // console.log(filterInput , reverseInput);
    infoText.style.display = "block";
    if(filterInput != reverseInput) {
        return infoText.innerHTML = `No, <span> ${inputText.value} </span> isn't a Palindrome`;
    }
    infoText.innerHTML = `Yes, <span>${inputText.value}</span> is a Palindrome`;
});

inputText.addEventListener("keyup", () => {
   filterInput = inputText.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return btn.classList.add("active");
    }
    btn.classList.remove("active");
});