var formElement = document.getElementById('resume-form');
var displayElementContent = document.getElementById('resume-display');
// Handle Form Submittion
formElement.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // Collect Input Values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Gemerate The Resume Content Dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3><b>Personal Details</b></h3>\n    <p><b>Name:</b> <span contenteditable=\"true\" > ".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\" >  ").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\" >  ").concat(phone, "</span></p>\n    <h3><b>Education</b></h3>\n    <p><b>Education:</b><span contenteditable=\"true\" >  ").concat(education, "</span></p>\n    <h3><b>Experience</b></h3>\n    <p><b>Experience:</b><span contenteditable=\"true\" >  ").concat(experience, "</span></p>\n    <h3><b>Skills</b></h3>\n    <p><b>Skills:</b><span contenteditable=\"true\" >  ").concat(skills, "</span></p>\n      \n    ");
    // Display The generated REsume 
    if (displayElementContent) {
        displayElementContent.innerHTML = resumeHTML;
    }
    else {
        console.error("The Details are missing ");
    }
});
