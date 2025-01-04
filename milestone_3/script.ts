const formElement = document.getElementById('resume-form') as HTMLFormElement;
const displayElementContent = document.getElementById('resume-display') as HTMLDivElement;

// Handle Form Submission
formElement.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect Input Values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate the Resume Content Dynamically
    const resumeHTML = `
        <h2><b>Resume</b></h2>
        <h3><b>Personal Details</b></h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <h3><b>Education</b></h3>
        <p><b>Education:</b> ${education}</p>
        <h3><b>Experience</b></h3>
        <p><b>Experience:</b> ${experience}</p>
        <h3><b>Skills</b></h3>
        <p><b>Skills:</b> ${skills}</p>
    `;

    // Display the generated Resume
    if (displayElementContent) {
        displayElementContent.innerHTML = resumeHTML;
    } else {
        console.error("The Details section is missing");
    }
});
