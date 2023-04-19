const countvalue=document.querySelector('.number');

const decrement = () =>{
    // get the value from UI 
let val = parseInt(countvalue.innerText);
// Update the value 
val = val - 1 ;
// set the value on UI 
countvalue.innerText=val;
};

const increment = () => {
    // get the value from UI 
let val = parseInt(countvalue.innerText);
// Update the value 
val = val + 1 ;
// set the value on UI 
countvalue.innerText = val ;
};