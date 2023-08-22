// formFunctions.js

export const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const value = document.getElementsByName('happy');
    let selectedValue = null;
  
    for (let radio of value) {
      if (radio.checked) {
        selectedValue = radio.value;
        break; // Stop looping once a checked radio button is found.
      }
    }
  
    if (selectedValue !== null) {
      console.log(selectedValue);
    } else {
      alert('Please select an option');
    }
  };
  