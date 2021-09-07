const { performance } = require('perf_hooks');

const nemo = ["nemo"];
const everone = ['fish','charlie','evvi','anitha','senthil','savitha','nemo','mom','dad']

    //to loop large array
const large = new Array(100).fill('nemo');
function findNemo(array) {
    let t0 = performance.now();
    
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found NEMO");
      break;
    }
  }
  let t1 = performance.now();
  console.log(`performance time  milliseconds ${t1-t0}`);
}
findNemo(everone);