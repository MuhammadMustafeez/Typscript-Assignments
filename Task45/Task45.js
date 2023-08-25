"use strict";
function Car(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model,
    };
    options.forEach(option => {
        if (typeof option === 'object') {
            Object.assign(car, option);
        }
    });
    return car;
}
let myCar = Car('Toyota', 'Camry', { color: 'blue', year: 2023, features: ['GPS', 'Sunroof'] });
console.log(myCar);
