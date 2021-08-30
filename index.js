const nemo = ["nemo"];
    //to loop large array
const large = new Array(100).fill('nemo');
function findNemo(array) {
    // let t0 = performance.now();
    
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found NEMO");
    }
  }
//   let t1 = performance.now();
  console.log(`performance time  milliseconds`);
}

findNemo(large);