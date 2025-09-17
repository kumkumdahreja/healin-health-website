document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch and insert HTML with error handling and an alert
  function loadHTML(url, elementId) {
    fetch(url)
      .then((response) => {
        // Check if the response was successful (status 200-299)
        if (!response.ok) {
          throw new Error(
            `Failed to load component: ${url}. Status: ${response.status}`
          );
        }
        return response.text();
      })
      .then((data) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;
        } else {
          console.error(
            `Error: Element with ID '${elementId}' not found on the page.`
          );
          alert(
            `An error occurred: The placeholder for '${url}' was not found.`
          );
        }
      })
      .catch((error) => {
        // This 'catch' block will run if the fetch fails (e.g., due to a 404 Not Found error)
        console.error(error.message);
        alert(
          `Error: A critical part of the page could not be loaded. Please check the file path: ${url}`
        );
      });
  }

  // Call the function for your navbar and footer files
  loadHTML("../navbar.html", "navbar-placeholder");
  loadHTML("../footer.html", "footer-placeholder");
});
