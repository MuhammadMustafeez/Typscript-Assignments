interface Car_info {
manufacturer: string;
model: string;
[key: string]: any; // Allow arbitrary additional properties
}  
function Car(manufacturer: string, model: string, ...options: any[]): Car_info {
    const car: Car_info = {
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
  
  let myCar = Car('Toyota', 'Camry', { color: 'blue', year: 2023, features: ['GPS', 'Sunroof']});
console.log(myCar);