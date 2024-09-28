// Typewriter effect for heading
const nameText = "Hi, I'M Sana Ur Rehman, A Second Year BTech Computer Science Student";
let i = 0;
const speed = 100; // Speed of typing

function typeWriter() {
    if (i < nameText.length) {
        document.getElementById("name").innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Smooth scroll functionality for internal links
document.querySelectorAll('#head a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');

        // Only prevent default for internal links (anchors that start with '#')
        if (target.startsWith('#')) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // Allow default behavior for external links
            window.location.href = target;
        }
    });
});

// Fade-in effect for the text
window.onload = function() {
    let introText = document.getElementById('text');
    introText.style.opacity = '1';

    // Start the typewriter effect when the window loads
    typeWriter();

    // Contact section scroll animation
    window.addEventListener('scroll', function () {
        let contactSection = document.getElementById('Contact');
        let contactPosition = contactSection.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (contactPosition < screenPosition) {
            contactSection.style.transform = 'translateY(0)';
            contactSection.style.opacity = '1';
        }
    });
};
