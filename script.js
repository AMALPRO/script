<script>
document.addEventListener("DOMContentLoaded", function() {
  // Simulate click on the first device option (Android) when the page loads
  const firstDeviceOption = document.querySelector(".device-button:first-child");
  firstDeviceOption.click();
});

const deviceList = document.getElementById("device-list");
const iframeContainer = document.getElementById("iframe-container");
let currentIframe = null;

deviceList.addEventListener("click", (event) => {
  if (event.target.classList.contains("device-button")) {
    // Remove 'selected' class from all buttons
    document.querySelectorAll(".device-button").forEach(button => {
      button.classList.remove("selected");
    });

    // Add 'selected' class to the clicked button
    event.target.classList.add("selected");

    const src = event.target.getAttribute("data-src");
    iframeContainer.innerHTML = `<iframe allowfullscreen="" allow="encrypted-media" class="cf" frameborder="0" height="410px" rel="nofollow" scrolling="no" src="${src}" width="100%"></iframe>`;
    if (currentIframe !== null) {
      currentIframe.remove();
    }
    currentIframe = iframeContainer.firstChild;
  }
});
</script>
