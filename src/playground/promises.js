const promise = new Promise((resolve,reject) => {
    setTimeout(()=> { 
    resolve('Все прямо хорошо !');
 //   reject('Все прямо хреновато и не работает');
}, 5000);
});

promise.then((data) => {
    console.log('This is data: ',data);
    
}).catch((error) => {
    console.log("Отторжение :", error);
});