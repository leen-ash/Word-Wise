function searchAndScroll() {
    const searchTerm = document.getElementById("searchInput").value.trim();
    const content = document.getElementById("content");
    const headings = content.querySelectorAll("h2"); // Only target h2 elements
  
    // Remove existing highlights
    headings.forEach(h2 => {
      h2.classList.remove("highlight");
    });
  
    if (searchTerm) {
      let found = false;
  
      // Loop through each h2 and search for the term
      headings.forEach(h2 => {
        const regex = new RegExp(searchTerm, "gi");
        if (h2.textContent.match(regex)) {
          h2.classList.add("highlight");  // Add highlight if match is found
          if (!found) {  // Scroll to the first match
            h2.scrollIntoView({ behavior: "smooth", block: "center" });
            found = true;
          }
        }
      });
    }
  }
  