// const maxWaterContainer = function (heights) {
//     let maxArea = 0;
//     console.log({maxArea})

//     for (let p1 = 0; p1 < heights.length; p1++) {
//         console.log({p1, value: heights[p1]});
//         for (let p2 = p1 + 1; p2 < heights.length; p2++) {
//             console.log({p2})
//             const height = (Math.min(heights[p1], heights[p2]));
//             const width = p2 - p1;
//             const area = height * width;
//             // console.log(area);

//             maxArea = Math.max(maxArea, area);

//         }
//     };
//     return maxArea;
// }

// time: O(n^2);
// space: O(1)

//question : water containter area..

const heightsArray = [4, 8, 1, 2, 3, 9]
const maxWaterContainer = function (heights) {
    let p1 = 0,
        p2 = heights.length - 1;
    let maxArea = 0;
    console.log({
        p1,
        p2,
        maxArea
    })
    while (p1 < p2) {
        const height = (Math.min(heights[p1], heights[p2]));
        const width = p2 - p1;
        const area = height * width;
        console.log({
            height,
            width,
            area
        });
        maxArea = Math.max(maxArea, area);
        if (heights[p1] <= heights[p2]) {
            p1++;
        } else {
            p2--;
        }
    }
    return maxArea;
}

console.log(maxWaterContainer(heightsArray));
// time: O(n ^ 2);
// space: O(1)