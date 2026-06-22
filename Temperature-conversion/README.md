# Temperature Conversion Program

A simple and interactive web-based application that converts temperatures between Celsius and Fahrenheit.

## Features

- **Bidirectional Conversion**: Convert from Celsius to Fahrenheit or Fahrenheit to Celsius
- **User-Friendly Interface**: Clean and intuitive design with radio buttons for unit selection
- **Input Validation**: Validates user input to ensure only numbers are converted
- **Formatted Output**: Displays results with two decimal places and unit labels (°C or °F)

## How to Use

1. Open `index.html` in your web browser
2. Enter a temperature value in the input field
3. Select the conversion type:
   - **Celsius to Fahrenheit**: Converts a Celsius temperature to Fahrenheit
   - **Fahrenheit to Celsius**: Converts a Fahrenheit temperature to Celsius
4. Click the **Submit** button
5. The converted temperature will appear below the button

## Project Structure

```
Temperature-conversion/
├── index.html       # HTML markup for the application
├── app.js           # JavaScript logic for temperature conversion
├── style.css        # CSS styling for the application
└── README.md        # Project documentation
```

## File Descriptions

### index.html
Contains the HTML structure with:
- Input field for temperature value
- Radio buttons for selecting conversion type
- Submit button to trigger conversion
- Result display area

### app.js
Handles the conversion logic:
- Gets user input from the form
- Validates the input (checks for valid numbers)
- Performs the appropriate conversion calculation
- Displays the formatted result

### style.css
Provides styling for the user interface

## Technical Details

- **Language**: JavaScript (ES6)
- **No Dependencies**: Runs with vanilla JavaScript and HTML/CSS only
- **Conversion Formulas**:
  - Celsius to Fahrenheit: `°F = (°C × 9/5) + 32`
  - Fahrenheit to Celsius: `°C = (°F - 32) × 5/9`

## Error Handling

The program includes validation to:
- Alert users if no conversion type is selected
- Reject non-numeric input with an error message

## Browser Compatibility

Works on all modern browsers that support:
- ES6 JavaScript
- Standard DOM APIs
- CSS3

---

Enjoy converting temperatures! 🌡️
