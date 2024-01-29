let p1 = new Promise((resolve, reject) =>{
setTimeout(()=>{
 document.body.appendChild(document.createElement("h3")).innerHTML = "Initializing Hack Program...";
resolve("BY CHAXZZZZZEEEERRRR")
}, 1000 ); 
});

let p2 = new Promise((resolve, reject) =>{
setTimeout(()=>{document.body.appendChild(document.createElement("h3")).innerHTML = "Bruteforcing username...";
                resolve(`<br>`+"username : badePAPA")
}, 2000 ); 
});

let p3 = new Promise((resolve, reject) =>{
setTimeout(()=>{document.body.appendChild(document.createElement("h3")).innerHTML = "decrypting password...";
                resolve(`<br>`+"133341245cdxscca")
                  // reject("32 bit encryption used password not found")
                
}, 5000 ); 
});


// p1.then((value)=>{(document.body.appendChild(document.createElement("h2")).innerHTML = "Hacked successfully..."+ value);
//             })

// p2.then((value)=>{(document.body.appendChild(document.createElement("h2")).innerHTML = "Hacked successfully..."+ value);;
//                                                                    })
// p3.then((value)=>{(document.body.appendChild(document.createElement("h2")).innerHTML = "Hacked successfully..."+ value);
//   })

// ==============================  avobe method will not work if you want to have the value of all 3 at once for that we use following  ================================


// let promice_all = Promise.all([p1,p2,p3])//if any value fails and gives error nothing will be shown

// let promice_all = Promise.allSettled([p1,p2,p3])// wolud show all the value even if one value fails

// promice_all.then((value)=>{
//   let result = value.map(v => `${v.value}`).join('<br>');
//     document.body.appendChild(document.createElement("h2")).innerHTML = `<h2>Successfully violated all the parameters</h2> <h3> ${result} </h3>`;
// });



// let promice_all = Promise.race([p1,p2,p3])
// // the first value to be resolved would be shown if there is no error or rejected
// promice_all.then((value)=>{
//     document.body.appendChild(document.createElement("h2")).innerHTML = `<h2>Successfully violated all the parameters</h2> <h3> ${value} </h3>`;
// }).catch((error)=>{
//     // Handle the error here
// });

let promice_all = Promise.any([p1,p2,p3])
// the first value to be resolved would be shown
promice_all.then((value)=>{
    document.body.appendChild(document.createElement("h2")).innerHTML = `<h2>Successfully violated all the parameters</h2> <h3> ${value} </h3>`;
}).catch((error)=>{
    // Handle the error here
});


