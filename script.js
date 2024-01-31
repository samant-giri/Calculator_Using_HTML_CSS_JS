let string = "";
let buttons = document.querySelectorAll('.btn');
// console.log(buttons)


Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        
        if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector(".input").value = string;
        }

        if (e.target.id == "back") {
            string = string.substring(0, string.length - 1);
            document.querySelector(".input").value = string;
        }

        else if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector(".input").value = string;
            string = "";
        }

        else {
            string += e.target.innerHTML;
            document.querySelector(".input").value = string;
        }
    })
})

// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=> {
//         if(e.target.innerText == '='){
//             string = eval(string);
//             document.querySelector('input').value = string;
//             string = "";
//         }
//         else if(e.target.innerText == 'C'){
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else{
//         // console.log(e.target);
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value = string;}
//     })
// })