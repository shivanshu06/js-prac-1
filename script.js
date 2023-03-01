const button=document.getElementById('button-a')
const buttona=document.getElementById('button-b')
const msg=document.getElementById('output')

const message= ()=>{
    msg.style.display="block";
    
}

const clear= ()=>{
    msg.style.display="none";
}

button.addEventListener('click' , message)
buttona.addEventListener('click' , clear)