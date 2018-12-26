class dog{
    constructor(name){
     this.name=name;
    }
    speak(){
        var a="woof";
        return a;
    }
}
class Labrador extends dog{
    constructor(name,color,breedWeight){
        super(name);
        this.color=color;
        this.breedWeight=breedWeight;
    }
    speak(){
        return "Labrador says woof";
    }
}
var l1 = new Labrador('Charlie', 'black', 20);
var l2 = new Labrador('Oliver', 'brown', 34);
console.log(l1.speak());
console.log(l1.name);
console.log(l1.color);
console.log(l1.breedWeight);
console.log(l2.speak());
console.log(l2.name);
console.log(l2.color);
console.log(l2.breedWeight);