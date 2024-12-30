function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultDisplay = document.getElementById("result");
    
    const showLoading = () => {
        resultDisplay.innerHTML = `
            <div class="loading">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Converting...</p>
            </div>
        `;
    };

    if (!temperatureInput.value) {
        resultDisplay.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>Please enter a temperature value</p>
            </div>
        `;
        return;
    }

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    showLoading();

    try {
        setTimeout(() => {
            let result;
            let conversions = [];
            
            switch(unit) {
                case "celsius":
                    const fahrenheit = (temperature * 9/5) + 32;
                    const kelvinFromC = temperature + 273.15;
                    conversions = [
                        `${fahrenheit.toFixed(2)}°F`,
                        `${kelvinFromC.toFixed(2)}K`
                    ];
                    break;
                
                case "fahrenheit":
                    const celsius = (temperature - 32) * 5/9;
                    const kelvinFromF = celsius + 273.15;
                    conversions = [
                        `${celsius.toFixed(2)}°C`,
                        `${kelvinFromF.toFixed(2)}K`
                    ];
                    break;
                
                case "kelvin":
                    const celsiusFromK = temperature - 273.15;
                    const fahrenheitFromK = (celsiusFromK * 9/5) + 32;
                    conversions = [
                        `${celsiusFromK.toFixed(2)}°C`,
                        `${fahrenheitFromK.toFixed(2)}°F`
                    ];
                    break;
            }
            
            resultDisplay.innerHTML = `
                <div class="conversion-result">
                    <div class="original-value">
                        <span class="label">Original:</span>
                        <span class="value">${temperature}${unit === 'celsius' ? '°C' : unit === 'fahrenheit' ? '°F' : 'K'}</span>
                    </div>
                    <div class="converted-values">
                        <span class="label">Converted to:</span>
                        <span class="value">${conversions.join(' / ')}</span>
                    </div>
                </div>
            `;
        }, 500); 
    } catch (error) {
        resultDisplay.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>An error occurred. Please try again.</p>
            </div>
        `;
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById("temperature");
    
    temperatureInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            convertTemperature();
        }
    });


    temperatureInput.addEventListener("input", function() {
        if (this.value === "") {
            this.style.borderColor = "";
            return;
        }
        
        const isValid = !isNaN(this.value) && this.value.trim() !== "";
        this.style.borderColor = isValid ? "#4361ee" : "#dc3545";
    });
});
