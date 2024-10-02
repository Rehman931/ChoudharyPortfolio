let currentService = "";

// Show communication options when clicking on a service or contact link
function showCommunicationOptions(service) {
    currentService = service;

    const overlay = document.getElementById("communication-overlay");
    const serviceTitle = document.getElementById("service-title");

    // Set the title based on whether a service or the contact link was clicked
    serviceTitle.textContent = service === 'Contact' ? 'Contact Options' : service;

    // Show the overlay
    overlay.style.display = "flex"; 
}

// Hide the communication options
function hideCommunicationOptions() {
    const overlay = document.getElementById("communication-overlay");
    if (overlay) {
        overlay.style.display = "none"; // Hide the overlay
    }
}

// Add event listener for clicks in the document to close the overlay
document.addEventListener("click", function(event) {
    const overlay = document.getElementById("communication-overlay");
    const communicationBox = document.querySelector(".communication-box");
    
    // If the overlay is visible and the click is outside the communication box, hide the overlay
    if (overlay && overlay.style.display === "flex" && !communicationBox.contains(event.target)) {
        hideCommunicationOptions();
    }
});

// Make sure that clicking on a service does not propagate the click to the document
document.querySelectorAll(".service-card").forEach(function(card) {
    card.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents the click event from bubbling up to the document
        showCommunicationOptions(this.querySelector('h2').textContent);
    });
});

// Communication actions
function sendWhatsAppMessage(service) {
    const phoneNumber = "7055063850";
    const message = `Hello, I am interested in the ${service} service. Could you please provide more details and the cost?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function sendMessengerMessage(service) {
    const message = `Hello, I am interested in the ${service} service.`;
    alert(`Messenger message: ${message}`);
}

function sendInstagramMessage(service) {
    const message = `Hello, I am interested in the ${service} service.`;
    alert(`Instagram message: ${message}`);
}
