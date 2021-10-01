function boooo(n){
    for(let i=0;i<n.length; i++){
        console.log('boooo');
    }
}

const n = [1,2,3,4,5];
boooo([1,2,3,4,5]);

function arrayOfHiNTimes(n){
    const hiArray = [];
    for(let i=0;i<n; i++){
       hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6);