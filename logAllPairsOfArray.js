const boxes = ["a", "b", "c", "d", "e"];
// function logAllPairsOfArray(array) {
//   for (let i = 0; i < boxes.length; i++) {
//     for (let j = 0; j < boxes.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// }

//es5
function logAllPairsOfArray(array) {
  array.forEach(function (firstboxes) {
    array.forEach(function (secondBoxes) {
        console.log(firstboxes, secondBoxes);
    });
  });
}
logAllPairsOfArray(boxes);
