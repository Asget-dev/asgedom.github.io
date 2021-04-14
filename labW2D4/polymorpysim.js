class Car{
    constructor(brand, year,price){
        this.brand=brand;
        this.year = year;
        this.price = price;
        this.model = model;
    }
    ComputePrice(){
        return this.price;
    }
    set model(value){
        this.abc = value;
    }
    get model(value){
        this.abc;
    }

}
class HybridCar extends Car{
    constructor(brand,year,price,taxRate,model){
        super(brand,year,price,model)
        this.taxRate = taxRate;
    }

    ComputePrice(){
        return this.price * ( 1 + this.taxRate);
    }
}
class ElectricCar extends Car{
    constructor(brand,year,price,electricTaxRate){
        super(brand,year,price)
        this.electricTaxRate = electricTaxRate;
    }
    ComputePrice(){
        return this.price * (1+this.electricTaxRate);
    }
}
class HeroCar extends Car{
    constructor(brand,year,price,heroTaxTate){
        super(brand,year,price)
        this.heroTaxTate = heroTaxTate;
    }
        computePrice(){
            return this.price * (1 + this.heroTaxTate);
        }
    }

    let hcae1 = new HybridCar('honda',2020,1000,0.01,"civic");
    hcae1.model;
const cars = [
    new HybridCar('Honda',2020,10000,0.01),
    new HybridCar('BMW',2020,50000,0.01),
    new ElectricCar('lexus',2020,10000,0.005),
    new ElectricCar('Tesla',2021,30000,0.005),
    new HeroCar('Tesla',2021,30000,0.005),
];

// function comp(car){
//     return cars.reduce((sum,car) => sum + car.computePrice(),0);
// }
// console.log(comp(cars));