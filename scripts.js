// Show Form
// Show Form
function openForm(type) {
    const formSection = document.getElementById('form-section');
    document.getElementById('login-form').style.display = type === 'login' ? 'block' : 'none';
    document.getElementById('signup-form').style.display = type === 'signup' ? 'block' : 'none';
    formSection.style.display = 'flex';
}

// Close Form
document.querySelectorAll('.close-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.getElementById('form-section').style.display = 'none';
    });
});

document.getElementById('form-section').addEventListener('click', (e) => {
    if (e.target.id === 'form-section') {
        e.target.style.display = 'none';
    }
});


// Show Course Overview
const courses = {
    java: {
        title: 'Java Full-Stack Development',
        info: 'Learn advanced Java, Spring Boot, and front-end technologies like React and Angular.'
    },
    aws: {
        title: 'AWS Certification Training',
        info: 'Master AWS, including EC2, S3, Lambda, and DevOps for cloud solutions.'
    }
};

function showOverview(course) {
    const overview = document.getElementById('course-overview');
    overview.style.display = 'block';
    document.getElementById('overview-title').textContent = courses[course].title;
    document.getElementById('overview-info').textContent = courses[course].info;
}
