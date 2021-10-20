
function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value, // parametrs from Emailjs
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);   //promises
        },
        function(error) {
            console.log("FAILED", error)
        }
    );
    return false; // To block from loading a new page
}