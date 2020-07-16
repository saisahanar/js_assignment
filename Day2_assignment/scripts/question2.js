let str="hello good morning."
//string methods
//substring:a substrinf from str is extracted
console.log(str.substring(0,4));
//replace:replaces the string with specified string
console.log(str.replace("hello","hi"));
//slice:slices the string and returns sliced string
console.log(str.slice(0,5));
//trim:removes unwanted string
console.log(str.trim());
//value of:returns a string
console.log(str.valueOf());
//concat:concatenates values
console.log(str.concat(" Hoe are u"))
//repeat:repeats the string by specifeied no of times
console.log(str.repeat(2));


//Array methods:

let arr=["hi",20,13.5,true];
console.log(arr);
//includes:finds whether object is present or not
console.log(arr.includes(12));
//push:pushes/adds to the rear end of array
console.log(arr.push(12));
console.log(arr);
//pop:pops the top element of array
console.log(arr.pop());
//unshift:adds element to the starting of array
console.log(arr.unshift(111))
console.log(arr)
//tostring:converts array into string
arrstr=arr.toString();
console.log(arrstr,typeof arrstr);




