const formElement = document.getElementById('resume-form') as HTMLFormElement
const displayElementContent = document.getElementById('resume-display') as HTMLDivElement

// Handle Form Submittion
formElement.addEventListener('submit', (event : Event)=>{
    event.preventDefault(); //prevent page reload

    // Collect Input Values

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education= (document.getElementById('education') as HTMLInputElement).value
    const experience= (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Gemerate The Resume Content Dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3><b>Personal Details</b></h3>
    <p><b>Name:</b> <span contenteditable="true" > ${name}</span></p>
    <p><b>Email:</b><span contenteditable="true" >  ${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true" >  ${phone}</span></p>
    <h3><b>Education</b></h3>
    <p><b>Education:</b><span contenteditable="true" >  ${education}</span></p>
    <h3><b>Experience</b></h3>
    <p><b>Experience:</b><span contenteditable="true" >  ${experience}</span></p>
    <h3><b>Skills</b></h3>
    <p><b>Skills:</b><span contenteditable="true" >  ${skills}</span></p>
      
    `;
    // Display The generated REsume 
    if (displayElementContent){
        displayElementContent.innerHTML = resumeHTML
    }
    else {
        console.error("The Details are missing ")
    }
});