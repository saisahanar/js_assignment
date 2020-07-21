console.log("question 2");

class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.course=[];
    }
    login(){
        console.log(`${this.name} has logged in.`)
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out.`)
        return this;
    }
}
class Moderator extends User{
    constructor(name ,age,email){
        super(name,age,email)
        this.role="Moderator";
    }
    addCoins(user){
        user.coins++;
        console.log(`${user.name} has ${user.coins} coins`);
        return this;
    }
    removeCoins(user){
        user.coins--;
        console.log(`${user.name} has ${user.coins} coins`)
        return this;
    }
}
class Admin extends User{
    constructor(name ,age,email){
        super(name,age,email)
        this.role="Admin";
    }
    addCourse(user,cors){
        user.course.push(cors);
        console.log(`${user.name} has ${user.course}`);

    }
    delCourse(user,cors){
        user.course.pop(cors);
        console.log(`${user.name} has ${user.course}`);
    }
}

let user1=new User("abc",20,"abc@gmail.com");
let user2=new User("def",22,"def@gmail.com");
let mod1=new Moderator("ghi",25,"ghi@gmail.com");
mod1.addCoins(user1);
mod1.addCoins(user1);
mod1.addCoins(user1);
mod1.removeCoins(user1);
let admin1=new Admin("xyz",30,"xyz@gmail.com");
admin1.addCourse(user2,"python");
admin1.addCourse(user2,"js");
admin1.delCourse(user2,"python");


