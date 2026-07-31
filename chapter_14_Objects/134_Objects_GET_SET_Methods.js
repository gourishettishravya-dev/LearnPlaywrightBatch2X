const user = {
    firstName: "Shravya",
    lastName: "Repala",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

//objects-JS{}
//Class and Objects
//this. It means current value in the object
console.log(user.fullName);
user.fullName = "Hanish Repala";
console.log(user.fullName);   