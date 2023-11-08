function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultDisplay = document.getElementById("result");
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (unit === "celsius") {
      const fahrenheit = (temperature * 9/5) + 32;
      const kelvin = (temperature + 273.15);
      resultDisplay.textContent = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
    } 
    else if (unit === "fahrenheit"){
      const celsius = (temperature - 32) * 5/9;
      const kelvin = (celsius + 273.15);
      resultDisplay.textContent = `${temperature}°F is equal to ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K`;
    }
    else{
      const celsius = (temperature - 273.15);
      const fahrenheit = (celsius * 9/5)+32;
      resultDisplay.textContent = `${temperature}K is equal to ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;

    }
    
  }