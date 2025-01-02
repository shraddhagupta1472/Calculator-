const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output="";
const calculate = (btnValues) => {
    if(btnValues === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
    } else if (btnValues === "AC") {
        output = "";
    } else if(btnValues === "DEL") {
        output = output.toString().slice(0, -1);
    }else {
        if (output === "" && specialChars.includes(btnValues)) return ;
        output += btnValues;
    }
   input.values = output ;
};
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});