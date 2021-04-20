/**
 * Interactive Form, Treehouse FSJS Techdegree Project 3
 */

/**
 * Global variables
 */

const nameInput = document.getElementById('name');
const otherJobInput = document.getElementById('other-job-role');
const selectJob = document.getElementById('title');
const selectColor = document.getElementById('color');
const selectDesign = document.getElementById('design');

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

