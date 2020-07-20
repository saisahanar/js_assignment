const student={
    name:"Helsinki",
    age:24,
    projects:{
        dicegame:"Two players dice game in JavaScript"
    }
}
const {name,age,projects:{dicegame}}=student;
console.log(`Name is ${name}, age is ${age} and projects worked are: ${dicegame}`);