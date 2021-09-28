//Create a super class called Vehicle
class Vehicle{
    //Declare its Constructors
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //Information method that logs all the classes arguments to the console
    Information(){
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

//Create a child class Cars that inherits from the Vehicle Class
class Cars extends Vehicle{
    //Declare its constructors and inherit those from its parent
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    //Information Method that calls the parent method of the same name and logs the new child's arguments
    Information(){
        super.Information();
        console.log(`Year: ${this.doors}`);
    }
}

//Create a new instance of the car class and pass its arguments
let newCar = new Cars('Ford', 'Focus', '2004', 4);
//Call the new car instance's information method to log its arguments to the screen
newCar.Information();

