window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
const setupIntialValues = () => {
  const initials = {
    amount: 20000,
    term: 6,
    rate: 4.5,
  };
  const UIValues = document.getElementById("loan-amount");
  const UIYears = document.getElementById("loan-years");
  const UIRate = document.getElementById("loan-rate");
  UIValues.amount = initials.amount;
  UIYears.term = initials.term;
  UIRate.rate = initials.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
const update = () => {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayent(currentUIValues)); 
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
const calculateMonthlyPayent = () => {
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
const updateMonthly = () => {

}