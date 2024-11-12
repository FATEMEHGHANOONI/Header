function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-content");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.language')) {
      var dropdown = document.getElementById("dropdown-content");
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    }
  }
  