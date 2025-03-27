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


