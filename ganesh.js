//Question1
// first class function 

//A programing language is said to have a first a class function ,if function in that programing language are treated like any other value.


//function is treated as object .

//.you can assign a function to a variable like any other value.

//you can pass a fuction as an argument  to another function.

//. you can return a function from another function 


//1 you can assign a function  // function expression store to variable
const vinayak = function (){
    return a
 };
 console.log(vinayak);
 
 //2 you can passed  a function in argument to another function 
 
 function myFirst(){
   console.log('hello');
 }
 
 function mySecond(){
   console.log('world');
 }
 
 function myThird(a,b){
   console.log(a(),b());
 }
  console.log(myThird(myFirst,mySecond));
 
 //3 you can return function 
 
 function myFunction(){
   return('hi');
 } 
 myFunction();

 //Question 2


 <p id="demo"></p>
 // call apply bind cqama seprated
const Ganesh = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const Ganesh1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const Ganesh2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
 // document.getElementById("demo").innerHTML = Ganesh.fullName.call(Ganesh1); 
  console.log(Ganesh.fullName.call(Ganesh2));

  //apply square bracket pass the argument array 
  const diaha = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  document.getElementById("demo").innerHTML = disha.fullName.apply(person1, ["Oslo", "Norway"]); 
  
  //bind new function is created for the last
  const sonu = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = sonu.fullName.bind(member);
  console.log('fullname');


  //Question 3 // object 

  const Person = {
    firstName: "vinayak",
    lastName: "Patil", 
    age: 22,
    gender:'Male',
  }

  person.Nationality='indian'
  console.log(person);
//Question 4
  // object consructor
  function myFunction(first,last,age,nationality){
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.nationality = nationality;
   }

   const Show = new myFunction('vinayak','patil',23,'indian');
   console.log(Show);

   //Question 5

   function Name(first,last,age,) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
 }
   Name.prototype.nationality ='indian'
   const myFather = new Name('kailas','patil',45,'Male');
   const myMother = new Name('rani','patil',41,'Female');
 console.log(myFather);


 //Question 6
 //Each object has a private property which holds a link to another object called its prototype.
 
 const Studentproto =  {
  calAge(){
  
      console.log(2022- this.byear);
  },
  initilise(fName,lName,gender,byear){
      this.fName = fName;
      this.lName = lName;
      this.gender = gender;
      this.byear = byear;
  
  }
  
  }
  //const dish = object.create(Studentproto);
  //console.log(dish);
  //dish.initilise('vinayak','patil','male',1999);
  ///console.log('dish');
  //dish.calAge();
  //console.log(dish.__proto__);//studentproto
  //console.log(dish.__proto__.__proto__);//object
  //console.log(dish.__proto__.__proto__.__proto__);//null
  
  
  //console.log(name1.__proto__.__proto__);//obj
  //console.log(name1.__proto__.__proto__.__proto__);//null
  

  //Question inheritance the function 

        function Employee(name, age, gender, id) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.id = id;
        };
  
        function Developer(name, age, gender, id, 
        specialization) {
  
            // Calling Employee constructor function
            Employee.call(this, name, age, gender, id);
  
            // Adding a new parameter
            this.specialization = specialization;
        }
        console.log(Employee.prototype);
        console.log(Developer.prototype);

  //Question 7
  // callback function is  a  anounmous function . arrow function passed through  another the nasted functionand passed through the argumet. 

  function show(){
    console.log("i am clever boy ");


 }
 function sayhello(){
    console.log('hi');
 }
 function display(num1,num2,callback){
console.log(num1 + num2);
callback();


 }
 display( 20,30,show);
 display(20,30,sayhello);

 //Question 8
  // setTimeout 

  setTimeout(() => {
    console.log('vinayak');
    
  },2000);

 // Question 9

 // call stack and event loop 

 console.log('hi');

 setTimeout(() => {
  console.log('I am cleaver boy ');
 }, 5000);

 console.log('hello world');



  




