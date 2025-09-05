let array = [1 , 2, 3, 4, 5];

function sumOfTripledEvens(array){
    
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        
        //step 1 : if the element is an even number
        
        if (array[i] % 2 === 0) {
            //Step 2 : multiply this number by three
            const tripleEvenNumber =array[i] * 3;
            
            //step 3 : add the new number to the total
            sum += tripleEvenNumber;
            console.log(sum);
        }

    }
    return sum;
}

//using map method over the array to simplify the function

function addOne(num) {
    return num+1;
}

const arr = [1 ,2 ,3 ,4 ,5];


const mappedArr = arr.map(addOne);

console.log("Map method");
console.log(mappedArr);

/**WHAT MAPS DOES
 * map uses a callback fucnt in this case addOne
 * and then iterates over that ssame array applaying the
 * function
 */

//filter method 

function isOdd(num){
    return num % 2 !== 0;

}
const arra = [1 ,2 ,3 ,4 ,5];

const oddNums = arra.filter(isOdd);

console.log("Filter method");
console.log(oddNums);