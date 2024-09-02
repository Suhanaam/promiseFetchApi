const image=document.getElementById("userImage");
const email=document.getElementById("email");
const name=document.getElementById("name");

const fetchUser=()=>{
    fetch('https://randomuser.me/api/')
    .then(response=>response.json())
    .then(data=>console.log(data))
}