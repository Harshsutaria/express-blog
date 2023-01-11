const employee1 = { firstName: "Sahima", lastName: "Mutti" };
const employee2 = { firstName: "Aarush", lastName: "Krishna" };

function say(greeting) {
    console.log("this is",this)
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

say.call(employee1, "Hi");    // Hi Sahima Mutti 
say.call(employee2, "Hello"); // Hello Aarush Krishna 