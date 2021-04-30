# interactive-form
 Interactive form project for Full Stack JavaScript Techdegree at Treehouse

 In this project I created an interactive form using JavaScript. The HTML and CSS were provided. On this webpage a user is registering and submitting information for a fictional Full Stack Conference. The user must fill out certain input fields or else the form will not submit. The required fields that are not filled will then be highlighted with an "invalid" icon and message. Only when all required fields are filled and formatted correctly will the form submit.

 In the "Name" and "Email" input fields I have used Regular Expressions to validate the information being submitted. When the user's input is validated a green checkmark appears above the field. If a user enters a number in the "Name" field a separate RegEx validation occurs and changes the "invalid" message below, alerting the user that they cannot enter numbers in the "Name" field.

 In the "Job Role" section the user has the option to choose "Other", in which case a new input field appears and the user can enter their information.

 In the "T-shirts" section the user has the option to select two different choices in the "Design" field. Depending on their choice the "Color" field will change to display the appropriate options.

 In the "Register for Activities" section the user must choose at least one activity. Depending on the total activities that the user chooses the "Total Cost" will change. The user also cannot choose all of the activities, as some have conflicting times, so depending on the time of the activity the user chooses, other activities with conflicting times will be disabled and "greyed out". There is also a "focus" and "blur" addEventListener added to this section to increase user experience and accesibility. If the user tabs through the form, additional styling is added. 

 In the "Payment" section the default selection is "Credit Card" but the user also has other options, which will change the appearance of this section. If the user does choose "Credit Card" they will have to enter a valid credit card, zip code, and cvv number. These numbers are validated with RegEx. For the credit card number, I included a "real time" error messaging feature to alert the user whether their input is valid or not. This feature alerts the user of whether or not their input is valid as they input the number. 

