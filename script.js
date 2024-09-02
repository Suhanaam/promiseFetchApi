//creation of promises

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success=true;
        const person={
            firstName:'suhana',
            age:30
        }
        if(success){
            resolve(person)
        }
        else{
            reject("no person found")
        }

    },4000)
 
})

promise.then(data=>console.log(data))
      .catch(error=>console.log(error))