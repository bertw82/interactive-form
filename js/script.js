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
const creditCardinfo = document.getElementById('credit-card');
const paypalAlert = document.getElementById('paypal');
const bitcoinAlert = document.getElementById('bitcoin');
const form = document.querySelector('form');
const ccNumber = document.getElementById('cc-num');
const zipNumber = document.getElementById('zip');
const cvvNumber = document.getElementById('cvv');

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
            creditCardinfo.style.display = 'none';
            bitcoinAlert.style.display = 'none';
            paypalAlert.style.display = 'block';
        } else if ( e.target.value === 'bitcoin') {
            creditCardinfo.style.display = 'none';
            paypalAlert.style.display = 'none';
            bitcoinAlert.style.display = 'block';
        } else if (e.target.value === 'credit-card') {
            creditCardinfo.style.display = 'block';
            paypalAlert.style.display = 'none';
            bitcoinAlert.style.display = 'none';
        }
    }
});

/**
 * Form validation upon form submit: form logs an error in the console if anything is invalid
 */

// Helper functions

// Name validation 
function nameValidator(name) {
    const nameValue = name.value;
    const validName = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?/.test(nameValue) /* regex from Treehouse Form Input Validation 2 workspace by Robert Manolis */
    console.log(`Name validation test on "${nameValue}" evaluates to ${validName}`);
    return validName;
}

function emailValidator(email) {
    const emailValue = email.value;
    const validEmail = /^[^@]+@[^@]+\.[a-z]+$/i.test(emailValue) /* regex from Treehouse Form Input Validation 2 workspace by Robert Manolis */
    console.log(`Name validation test on "${emailValue}" evaluates to ${validEmail}`);
    return validEmail;
}

function activitiesRegisterValidator(activitiesChecked) {
    let count = 0;
    for (let i = 0; i < activitiesChecked.length; i++) {
        
        if (activitiesChecked[i].checked) {
            count += 1;
        }
    }
    const activitiesValid = count > 0;
    console.log(`Name validation test on activities evaluates to ${activitiesValid}`);
    return activitiesValid;
}

function ccNumValidator(number) {
    const ccNumValue = number.value;
    const validccNum = /^\d{13,16}$/.test(ccNumValue);
    console.log(`Name validation test on "${ccNumValue}" evaluates to ${validccNum}`);
    return validccNum;
}

form.addEventListener('submit', e => {
    // e.preventDefault();
    // nameValidator(nameInput);
    // emailValidator(emailInput);
    // activitiesRegisterValidator(activitiesCheckbox);
    // ccNumValidator(ccNumber);
    if (!nameValidator(nameInput)) {
        e.preventDefault();
        console.log('error validating name');
      } else if (!emailValidator(emailInput)) {
        e.preventDefault();
        console.log('error validating email');
      } else if (!activitiesRegisterValidator(activitiesCheckbox)) {
        e.preventDefault();
        console.log('error validating activities checked');
      }
});
