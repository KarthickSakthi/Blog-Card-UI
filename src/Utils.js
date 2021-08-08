
const isArrayEmpty = (arr) =>{
if(arr == undefined && arr == null && arr.length>0)
   return true;
else
   return false;   
}

const dumpLogs = (message) =>{
  console.log(message);
}

export {isArrayEmpty,dumpLogs};