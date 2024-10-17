const image=document.getElementById("userImage");
const email=document.getElementById("email");
const name=document.getElementById("name");

const fetchUser=()=>{
    fetch('https://randomuser.me/api/')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        // const user=data.results[0];
        // name.textContent=`${user.name.first} ${user.name.last}`
        // email.textContent=user.email
        // image.src=user.picture.large
    })
    .catch(error=>console.log(error))
}

