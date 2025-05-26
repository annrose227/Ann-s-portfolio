const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const video4 = document.getElementById("projectVideo4");
const video5 = document.getElementById("projectVideo5");
const video6 = document.getElementById("projectVideo6");
const hoverSign = document.querySelector(".hover-sign");

//sidebar elemenst//
// const sidebar = document; // Removed incorrect declaration
const videoList = [video1, video2, video3, video4, video5, video6];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoverSign.classList.add("active");
  });

  video.addEventListener("mouseout", function () {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

// Mobile Navigation Toggle
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', () => {
  sidebar.classList.add('open-sidebar');
});

closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('open-sidebar');
});

// Contact Form Handling
function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.innerHTML;
  
  // Disable button and show loading state
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';

  // Get form data
  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  // Send email using EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
    .then(function() {
      // Show success message
      alert('Message sent successfully!');
      form.reset();
    })
    .catch(function(error) {
      // Show error message
      alert('Failed to send message. Please try again later.');
      console.error('EmailJS error:', error);
    })
    .finally(function() {
      // Reset button state
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    });

  return false;
}

// Scroll Down Button Functionality
const scrollDown = document.querySelector('.scroll-down');
scrollDown.addEventListener('click', () => {
  // Add click animation class
  scrollDown.classList.add('clicked');
  
  // Remove the class after animation completes
  setTimeout(() => {
    scrollDown.classList.remove('clicked');
  }, 500);

  // Smooth scroll to about section
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Learning Widget Animation
const learningStatuses = document.querySelectorAll('.learning-status');
let currentIndex = 0;

function updateLearningStatus() {
  learningStatuses.forEach((status, index) => {
    if (index === currentIndex) {
      status.style.opacity = '1';
      status.style.transform = 'translateY(0)';
    } else {
      status.style.opacity = '0';
      status.style.transform = 'translateY(20px)';
    }
  });
  
  currentIndex = (currentIndex + 1) % learningStatuses.length;
}

// Initialize learning widget
updateLearningStatus();
setInterval(updateLearningStatus, 3000);
