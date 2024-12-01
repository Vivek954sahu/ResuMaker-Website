import jsPDF from 'jspdf';

const form = document.getElementById('resume-form');
const generateButton = document.getElementById('generate-resume');
const resumeOutput = document.getElementById('resume-output');

generateButton.addEventListener('click', () =>{
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const summary = formData.get('summary');
    const skills = formData.get('skills');
    const education = formData.get('education');
    const experience = formData.get('experience');
    const projects = formData.get('projects');
    const Achievements = formData.get('Achievements');


    const resumeHTML =`
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <h3>Summary</h3>
        <p>${summary}</p>
        <h3>Skills</h3>
        <ul>${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
        <h3>Education</h3>
        <p>${education.replace(/\n/g,'<br>')}</p>
        <h3>Work Experience</h3>
        <p>${experience.replace(/\n/g,'<br>')}</p>
        <h3>Projects</h3>
        <p>${projects.replace(/\n/g,'<br>')}</p>
        <h3>Achievements</h3>
        <p>${Achievements.replace(/\n/g,'<br>')}</p>`;

        resumeOutput.innerHTML = resumeHTML;

    
})

document.getElementById('download').addEventListener('click',() =>{
    const doc = new jsPDF();
    doc.text('Resume',25,15);
    doc.save('resume.pdf');
});