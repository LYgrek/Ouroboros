document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    
    items.forEach(item => {
      // Hover background color change (keeping the original effect)
      item.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#951919";
      });
      
      item.addEventListener("mouseout", function () {
        if (!this.classList.contains("show-explanation")) {
          this.style.backgroundColor = "rgb(17, 17, 17)";
        }
      });
      
      // Click to show/hide explanation
      item.addEventListener("click", function () {
        this.classList.toggle("show-explanation");
        
        // If we're hiding the explanation, reset the background color
        if (!this.classList.contains("show-explanation")) {
          // Only reset if not hovering
          if (!item.matches(":hover")) {
            this.style.backgroundColor = "rgb(17, 17, 17)";
          }
        }
      });
      
      // For accessibility and keyboard navigation
      item.addEventListener("keydown", function(e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
      
      // Make items focusable for keyboard accessibility
      item.setAttribute("tabindex", "0");
    });
    
    // Close explanations when clicking elsewhere on the page
    document.addEventListener("click", function(e) {
      if (!e.target.closest(".item")) {
        items.forEach(item => {
          item.classList.remove("show-explanation");
          if (!item.matches(":hover")) {
            item.style.backgroundColor = "rgb(17, 17, 17)";
          }
        });
      }
    });
  });
