/**
 * Interactive Form, Treehouse FSJS Techdegree Project 3
 */

"use strict";

/**
 * Global variables
 */

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const otherJobInput = document.getElementById('other-job-role');
const selectJob = document.getElementById('title');
const selectColor = document.getElementById('color');
const selectDesign = document.getElementById('design');
const activitiesSection = document.getElementById('activities');
const activitiesCheckbox = document.querySelectorAll('#activities-box label input[type="checkbox"]');
const totalActivitiesCost = document.getElementById('activities-cost');
const selectPayment = document.getElementById('payment');
const creditCardInfo = document.getElementById('credit-card');
const paypalAlert = document.getElementById('paypal');
const bitcoinAlert = document.getElementById('bitcoin');
const form = document.querySelector('form');
const ccNumInput = document.getElementById('cc-num');
const zipNumInput = document.getElementById('zip');
const cvvNumInput = document.getElementById('cvv');

/**
 * focus on nameInput on page load 
 */ 

nameInput.focus();

/**
 * Job Role section: hide "other role" text field, unhide when "Other" is selected in job menu
 */

otherJobInput.style.display = 'none';

selectJob.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobInput.style.display = 'block';
    } else {
        otherJobInput.style.display = 'none';
    }
});

/*
* Color select section: disable Color select, enable when change detected
*/

selectColor.setAttribute('disabled', '');

selectDesign.addEventListener('change', (e) => {
    selectColor.removeAttribute('disabled');
        for (let i = 0; i < selectColor.options.length; i++) {
            selectColor.options[0].selected = true;
            selectColor.options[0].hidden = true;
            const option = selectColor.options[i];
            const optionDataTheme = option.getAttribute('data-theme');
            if (e.target.value === 'js puns') {
                if (optionDataTheme === 'heart js') {
                    option.style.display = 'none';
                } else if (optionDataTheme === 'js puns'){
                    option.style.display = 'initial';
                }
            } else if (e.target.value === 'heart js') {
                if (optionDataTheme === 'js puns') {
                    option.style.display = 'none';
                } else if (optionDataTheme === 'heart js') {
                    option.style.display = 'initial';
                }
            }
        }
});

/**
 * Register for activities section: when user clicks and unclicks on activities to sign up for, the total cost of the activities is updated 
 */
 
activitiesSection.addEventListener('change', e => {
    let activitiesCount = 0;
    let totalCost = 0;
    for (let i = 0; i < activitiesCheckbox.length; i++) {
        if (activitiesCheckbox[i].checked) {
            const activityCost = activitiesCheckbox[i].getAttribute('data-cost');
            totalCost += parseInt(activityCost);
            activitiesCount += 1;
            console.log(activitiesCount);
            console.log(totalCost);
            totalActivitiesCost.textContent = `Total: $${totalCost}`;
        } 
        else if (activitiesCount === 0) {
            totalActivitiesCost.textContent = `Total: $0`;
        }
    }
});

/**
 * Credit Card section: when any field other than credit card is selected, credit card fields disappear
 */

// hide paypal and bitcoin sections
paypalAlert.style.display = 'none';
bitcoinAlert.style.display = 'none';

selectPayment.addEventListener('change', e => {
    for (let i = 0; i < selectPayment.options.length; i++) {
        if (e.target.value === 'paypal') {
            creditCardInfo.style.display = 'none';
            bitcoinAlert.style.display = 'none';
            paypalAlert.style.display = 'block';
        } else if ( e.target.value === 'bitcoin') {
            creditCardInfo.style.display = 'none';
            paypalAlert.style.display = 'none';
            bitcoinAlert.style.display = 'block';
        } else if (e.target.value === 'credit-card') {
            creditCardInfo.style.display = 'block';
            paypalAlert.style.display = 'none';
            bitcoinAlert.style.display = 'none';
        }
    }
});

/**
 * Form validation upon form submit: form logs an error in the console if anything is invalid
 */

// Helper functions
function nameValidator() {
    const nameValue = nameInput.value;
    const validName = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?/.test(nameValue) /* regex from Treehouse Form Input Validation 2 workspace by Robert Manolis */
    return validName;
}

function emailValidator() {
    const emailValue = emailInput.value;
    const validEmail = /^[^@]+@[^@]+\.[a-z]+$/i.test(emailValue) /* regex from Treehouse Form Input Validation 2 workspace by Robert Manolis */
    return validEmail;
}

function activitiesRegisterValidator() {
    let count = 0;
    for (let i = 0; i < activitiesCheckbox.length; i++) { 
        if (activitiesCheckbox[i].checked) {
            count += 1;
        }
    }
    const activitiesValid = count > 0;
    return activitiesValid;
}

function ccNumValidator() {
    const ccNumValue = ccNumInput.value;
    const validccNum = /^\d{13,16}$/.test(ccNumValue);
    return validccNum;
}

function zipCodeValidator() {
    const zipCodeValue = zipNumInput.value;
    const validZipCode = /^\d{5}$/.test(zipCodeValue);
    return validZipCode;
}

function cvvValidator() {
    const cvvValue = cvvNumInput.value;
    const validCvv = /^\d{3}$/.test(cvvValue);
    return validCvv;
}
// \Helper Functions

form.addEventListener('submit', e => {
    if (!nameValidator()) {
        e.preventDefault();
        console.log('error validating name');
      } else if (!emailValidator()) {
        e.preventDefault();
        console.log('error validating email');
      } else if (!activitiesRegisterValidator()) {
        e.preventDefault();
        console.log('error validating activities checked');
      } else if (selectPayment.value === 'credit-card') {
        if (!ccNumValidator()) {
            e.preventDefault();
            console.log('error validating credit-card number');
        } else if (!zipCodeValidator()) {
            e.preventDefault();
            console.log('error validating zip code');
        } else if (!cvvValidator()) {
            e.preventDefault();
            console.log('error validating CVV number');
        }
      }
});

/**
 * Listen for `focus` and `blur` events on the activities section checkboxes
 */

activitiesCheckbox.forEach(checkbox => checkbox.addEventListener('focus', () => {
    checkbox.parentNode.classList.add('focus');
}));

activitiesCheckbox.forEach(checkbox => checkbox.addEventListener('blur', () => {
    checkbox.parentNode.classList.remove('focus');
}))

