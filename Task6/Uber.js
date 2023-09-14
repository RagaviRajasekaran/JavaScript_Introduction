class UberPriceCalculator {
  constructor(baseFare, costPerKilometer, costPerMinute, surgeMultiplier = 1) {
    this.baseFare = baseFare;
    this.costPerKilometer = costPerKilometer;
    this.costPerMinute = costPerMinute;
    this.surgeMultiplier = surgeMultiplier;
  }

  calculatePrice(distanceInKilometers, timeInMinutes) {
    const fareBeforeSurge = 
      this.baseFare + 
      distanceInKilometers * this.costPerKilometer +
      timeInMinutes * this.costPerMinute;
    
    const finalFare = fareBeforeSurge * this.surgeMultiplier;

    return finalFare;
  }
}

// Example usage:
const calculator = new UberPriceCalculator(2.5, 1.2, 0.2, 1.5); // Adjust these values accordingly

const distance = 10; // in kilometers
const time = 20; // in minutes

const price = calculator.calculatePrice(distance, time);
console.log(`Estimated Uber Price: $${price.toFixed(2)}`);
