//Create a new class
class BMI
{
    //Declare its arguments
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    //Create a Method that calculates and returns a variable from the passed arguments
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

//Create a new instance of the class and give it the arguments
let myBMI = new BMI(2, 90);
//Create a Variable with the new instance's calculate method
let calcBMI = myBMI.calculateBMI();
//Log the above variable to the console
console.log(calcBMI);