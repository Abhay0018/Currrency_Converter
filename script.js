// const fromAmountElement = document.querySelector('.amount');
// const convertedAmountElement = document.querySelector('.convertedAmount');
// const fromCurrencyElement = document.querySelector('.fromCurrency');
// const toCurrencyElement = document.querySelector('.toCurrency');
// const resultElement = document.querySelector('.result');

// const countries = [
//     { code: "USD", name: "United States Dollar" },
//     { code: "INR", name: "Indian Rupee" },
// ];

// if (fromCurrencyElement && toCurrencyElement) {
//     fromCurrencyElement.value = "USD"; // Set default value
//     toCurrencyElement.value = "INR"; // Set default value
// }

// const selectElement = document.getElementById("mySelect");

// const options = ["Option 1", "Option 2", "Option 3"];

// options.forEach(optionText => {
//   let option = document.createElement("option");
//   option.value = optionText.toLowerCase().replace(" ", "_"); 
//   option.textContent = optionText;
//   selectElement.appendChild(option);
// });


// const getExchangeRate = async () => {
//     const amount = parseFloat(fromAmountElement.value);
//     const fromCurrency = fromCurrencyElement.value; 
//     const toCurrency = toCurrencyElement.value;
   
//     try {
//         const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_jmULlDFBDzmPDiGhjEq4QU6EOYZRyQdSxX2VITrE&base_currency=${fromCurrency}`); 
//         const data = await response.json(); 

//         const conversionRate = data.rates[toCurrency];
//         const convertedamount = (amount * conversionRate);

//         convertedAmountElement.value = convertedamount.toFixed(2); // Fix for decimal values
//         resultElement.textContent = `${amount} ${fromCurrency} = ${convertedamount} ${toCurrency}`;
//     } catch (error) {
//         console.error('Error fetching exchange rate:', error);
//         resultElement.textContent = 'Failed to fetch exchange rate.';
//     }
// }

// fromAmountElement.addEventListener('input', getExchangeRate);
// fromCurrencyElement.addEventListener('change', getExchangeRate);
// toCurrencyElement.addEventListener('change', getExchangeRate);
// window.addEventListener('load', getExchangeRate);


const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.ConvertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');

// Ensure the select elements exist before setting default values
if (fromCurrencyElement && toCurrencyElement) {
    fromCurrencyElement.value = "USD"; // Set default value
    toCurrencyElement.value = "INR"; // Set default value
}

const getExchangeRate = async () => {
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    try {
        const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_jmULlDFBDzmPDiGhjEq4QU6EOYZRyQdSxX2VITrE&base_currency=${fromCurrency}`);
        const data = await response.json();

        if (!data ||!data.data || !data.data[toCurrency]) {
            throw new Error("Invalid exchange rate data received");
        }

        const conversionRate = data.data[toCurrency];
        const convertedAmount = (amount * conversionRate).toFixed(2);

        convertedAmountElement.value = convertedAmount;
        resultElement.textContent = `1 ${fromCurrency} = ${conversionRate} ${toCurrency}`;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        resultElement.textContent = 'Failed to fetch exchange rate.';
    }
};

// Event listeners
fromAmountElement.addEventListener('input', getExchangeRate);
fromCurrencyElement.addEventListener('change', getExchangeRate);
toCurrencyElement.addEventListener('change', getExchangeRate);
window.addEventListener('load', getExchangeRate);
