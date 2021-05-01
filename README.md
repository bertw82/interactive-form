# interactive-form
 Interactive form project for Full Stack JavaScript Techdegree through Treehouse

 In this project I wrote the JavaScript for an interactive form. The HTML and CSS were provided. On this webpage a user is registering and submitting information for a fictional Full Stack Conference. The user must fill out certain input fields or else errors will appear and the form will not submit. The required fields that are not filled will then be highlighted with an "invalid" icon and message. Only when all required fields are filled and formatted correctly will the form submit.

 In the "Name" and "Email" input fields I have used Regular Expressions to validate the information being submitted. When the user's input is validated a green checkmark appears above the field. 
 
 *Real-time error messaging*
 If a user begins to enter an email with the incorrect format, the "email" field has a real-time error message that alerts the user as they type in their information. This message shows the user the correct format in the new error message. 

 In the "Job Role" section the user has the option to choose "Other", in which case a new input field appears and the user can enter their information.

 In the "T-shirts" section the user has the option to select two different choices in the "Design" field. Depending on their choice the "Color" field will change to display the appropriate options.

 In the "Register for Activities" section the user must choose at least one activity. Depending on the total activities that the user chooses the "Total Cost" will change. The user also cannot choose all of the activities, as some have conflicting times, so depending on the time of the activity the user chooses, other activities with conflicting times will be disabled and "greyed out". There is also a "focus" and "blur" addEventListener added to this section to increase user experience and accesibility. If the user tabs through the form, additional styling is added through these functions. 

 In the "Payment" section the default selection is "Credit Card" but the user also has other options: PayPal and Bitcoin, which will change the appearance of this section if selected. If the user does choose or stay with "Credit Card" they will have to enter a valid credit card, zip code, and cvv number. These numbers are validated with RegEx. 
 
  *Conditional Error Messaging*
 For the credit card number, I have included a conditional error messaging feature to alert the user if they use any spaces or dashes, as that is not allowed in this form validation.  

