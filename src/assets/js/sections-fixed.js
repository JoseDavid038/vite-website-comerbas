document.addEventListener('DOMContentLoaded', function() {
  loadComponent2("section-why", "/components/section-fixed.html");

  
});

// Function to fetch and load components
function loadComponent2(tag, file, callback = null){
  fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(tag).innerHTML = data;
        if (callback) callback();  // Ensure the callback runs after loading
      })
      .catch(error => console.error(`Error loading ${file}:`,error));
}