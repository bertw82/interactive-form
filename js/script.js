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
const activitiesBox = document.getElementById('activities-box');
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
const inputs = document.querySelectorAll('input');

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
            if (e.target.value === 'js puns') {
                selectColor.innerHTML = `
                    <option data-theme="js puns" value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
                    <option data-theme="js puns" value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
                    <option data-theme="js puns" value="gold">Gold (JS Puns shirt only)</option>
                `;
            } else if (e.target.value === 'heart js') {
                selectColor.innerHTML = `
                    <option data-theme="heart js" value="tomato">Tomato (I &#9829; JS shirt only)</option>
                    <option data-theme="heart js" value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
                    <option data-theme="heart js" value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
                `;
            }
        }
});

/**
 * Register for activities section: when user clicks and unclicks on activities to sign up for, the total cost of the activities is updated 
 */

// helper functions to add/remove `disabled` class
function addDisabled(input) {
    input.parentNode.classList.add('disabled');
    input.disabled = true;
}

function removeDisabled(input) {
    input.parentNode.classList.remove('disabled');
    input.disabled = false;
}
 
activitiesSection.addEventListener('change', e => {
    let activitiesCount = 0;
    let totalCost = 0;
    const jsLibs = document.querySelector('input[name="js-libs"]');
    const jsFrameworks = document.querySelector('input[name="js-frameworks"]');
    const node = document.querySelector('input[name="node"]');
    const buildTools = document.querySelector('input[name="build-tools"]');

    for (let i = 0; i < activitiesCheckbox.length; i++) {
        if (activitiesCheckbox[i].checked) {
            const activityCost = activitiesCheckbox[i].getAttribute('data-cost');
            totalCost += parseInt(activityCost);
            activitiesCount += 1;
            totalActivitiesCost.textContent = `Total: $${totalCost}`;
        } else if (activitiesCount === 0) {
            totalActivitiesCost.textContent = `Total: $0`;
        } 
    };

    // add/remove `disabled` class to conflicting activities
    if (jsLibs.checked) {
        addDisabled(jsFrameworks);
        removeDisabled(jsLibs);
    } else if (!jsLibs.checked) {
        removeDisabled(jsFrameworks);
    }
    if (jsFrameworks.checked) {
        removeDisabled(jsFrameworks);
        addDisabled(jsLibs);
    } else if (!jsFrameworks.checked) {
        removeDisabled(jsLibs);
    }
    if (node.checked) {
        addDisabled(buildTools);
        removeDisabled(node);
    } else if (!node.checked) {
        removeDisabled(buildTools);
    }
    if (buildTools.checked) {
        addDisabled(node);
        removeDisabled(buildTools);
    } else if (!buildTools.checked) {
        removeDisabled(node);
    }
});

/**
 * Credit Card section: when any field other than credit card is selected, credit card fields disappear
 */

// show credit card in select menu and hide paypal and bitcoin sections on page load
selectPayment.options[1].selected = true;
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
 * Form validation upon form submit: if any required form field is invalid the console logs an error
 */

// Helper functions
function nameValidator() {
    const nameValue = nameInput.value;
    const validName = /.+/.test(nameValue); 
    return validName;
}

function emailValidator() {
    const emailValue = emailInput.value;
    const validEmail = /^[^@]+@[^@]+\.com$/i.test(emailValue); /* regex from Treehouse Form Input Validation 2 workspace by Robert Manolis */
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

function validInput(input) {
    input.parentNode.className = 'valid';
}

function validActivities() {
    activitiesSection.firstElementChild.className = 'valid';
}

function errorActivities() {
    activitiesSection.firstElementChild.className = 'not-valid';
    activitiesSection.firstElementChild.classList.remove('valid');
    activitiesSection.lastElementChild.style.display = 'block';
}

function errorDisplayMessage(input) {
    input.parentNode.className = 'not-valid';
    input.parentNode.classList.remove('valid');
    input.parentNode.lastElementChild.style.display = 'block';
}

// Form submission addEventListener 
form.addEventListener('submit', e => {
    highlightEmptyField();

    if (!nameValidator()) {
        e.preventDefault();
        errorDisplayMessage(nameInput);
    } else {
        validInput(nameInput);
    }
    if (!emailValidator()) {
        e.preventDefault();
        errorDisplayMessage(emailInput);
    } else {
        validInput(emailInput);
    }
    if (!activitiesRegisterValidator()) {
        e.preventDefault();
    } else {
        validActivities();
    }
    if (selectPayment.value === 'credit-card') {
        if (!ccNumValidator()) {
            e.preventDefault();
            errorDisplayMessage(ccNumInput);
        } else {
            validInput(ccNumInput);
        }
        if (!zipCodeValidator()) {
            e.preventDefault();
            errorDisplayMessage(zipNumInput);
        } else {
            validInput(zipNumInput);
        }
        if (!cvvValidator()) {
            e.preventDefault();
            errorDisplayMessage(cvvNumInput);
        } else {
            validInput(cvvNumInput);
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
}));

/**
 * Helper function: if empty fields the required field is highlighted and given a `hint`
 */

const inputArray = [nameInput, emailInput, ccNumInput, zipNumInput, cvvNumInput];

function highlightEmptyField() {
    inputArray.forEach(input => {
        if (input.value === '') {
           errorDisplayMessage(input);
        } 
    });
    if (!activitiesRegisterValidator()) {
        errorActivities();
    }
}

// addEventListeners for input and checkboxes to remove `not-valid` upon input or check
inputArray.forEach(input => input.addEventListener('input', () => {
    input.parentNode.classList.remove('not-valid');
    input.parentNode.lastElementChild.style.display = 'none';
}));

activitiesCheckbox.forEach(box => box.addEventListener('change', () => {
    box.parentNode.parentNode.parentNode.firstElementChild.classList.remove('not-valid');
    box.parentNode.parentNode.parentNode.lastElementChild.style.display = 'none';
}));

/**
 * Real-time error messaging for email: provide real-time error validation messaging while the user inputs their information
 */

 emailInput.addEventListener('keyup', () => {
    if (!emailValidator()) {
        errorDisplayMessage(emailInput);
        emailInput.parentNode.lastElementChild.innerHTML = 'Email format requried: name@email.com';
    }
});

/**
 * Conditional error messaging for credit-card: if a space or dash is used a different error message will appear below
 */

 ccNumInput.addEventListener('keyup', () => {
    const ccNumValue = ccNumInput.value;
    const invalidNum = /[\s-]/.test(ccNumValue);
    if (invalidNum) {
        errorDisplayMessage(ccNumInput);
        ccNumInput.parentNode.lastElementChild.innerHTML = 'Dashes or spaces not allowed';
    }
});


