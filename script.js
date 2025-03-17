// Set the date we're counting down to
const weddingDate = new Date("April 20, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdown);
    // Update the correct element (the one with the class "countdown")
    document.querySelector(".countdown").innerHTML = "We're Married! 💑";
  }
}, 1000);

// Initialize ScrollReveal
ScrollReveal({
  reset: true, // Reset animations on each scroll
  distance: "60px", // Animation distance
  duration: 1000, // Animation duration in milliseconds
  delay: 200, // Delay before animation starts
  easing: "ease-in-out", // Animation easing
});

// Reveal elements
ScrollReveal().reveal("#events", { origin: "top" });
ScrollReveal().reveal("#wedding-details", { origin: "bottom" });
ScrollReveal().reveal("#event-list", { origin: "left", interval: 200 }); // Interval for staggered reveal
// ScrollReveal().reveal('#venue', { origin: 'right' });
// ScrollReveal().reveal('#about-us', { origin: 'bottom'});

// Notification

document.getElementById("setAlarm").addEventListener("click", function () {
  const weddingDate = new Date("April 20, 2025 10:00:00").getTime();

  if (!("Notification" in window)) {
    alert("Your browser does not support notifications.");
    return;
  }

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      scheduleAlarm(weddingDate);
    } else {
      alert("Please allow notifications to set the alarm.");
    }
  });
});

function scheduleAlarm(weddingTime) {
  localStorage.setItem("weddingAlarm", weddingTime); // Save in localStorage

  function checkAlarm() {
    const now = new Date().getTime();
    const savedTime = localStorage.getItem("weddingAlarm");

    if (savedTime && now >= savedTime) {
      new Notification("🎉 Wedding Time!", {
        body: "It's time to celebrate Tulsi & Saroj's wedding! 🎊",
        icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
      });

      localStorage.removeItem("weddingAlarm"); // Remove after triggering
      clearInterval(alarmChecker); // Stop checking
    }
  }

  const alarmChecker = setInterval(checkAlarm, 5000); // Check every 5 sec
  alert("Wedding alarm set! Keep this tab open to receive notifications.");
}





// POPup modal
window.onload = function() {
  // Show the modal every time the page is loaded or refreshed
  document.getElementById('welcome-modal').style.display = 'block';

  // Close the modal when the user clicks on the close button
  document.getElementById('close-modal').onclick = function() {
    document.getElementById('welcome-modal').style.display = 'none';
  }

  // Close the modal if the user clicks outside of the modal content
  window.onclick = function(event) {
    if (event.target == document.getElementById('welcome-modal')) {
      document.getElementById('welcome-modal').style.display = 'none';
    }
  }
}
