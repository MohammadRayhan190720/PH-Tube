const isVarified = '' ;
// if (isVarified) {
//   console.log("user is varified")
// }else{
//   console.log("user is not varified")
// }

// console.log(`
//   ${isVarified === true ? "User is varified" : "User is not varified"}`
//     );

  const getTimeString = (time) =>{
    const hours = parseInt(time / 3600);
    let remainingSeconds = time % 3600;
    const minutes = parseInt(remainingSeconds / 60);
    remainingSeconds = time % 60;
    
    return `${hours} hours ${minutes} minutes ${remainingSeconds} seconds  ago`;

  }

  const result = getTimeString(16278);
  console.log(result);