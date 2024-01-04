function guideHide(showThisElementID, hideThisElementID) {
    var hideThisElement = document.getElementById(hideThisElementID);
    var showThisElement = document.getElementById(showThisElementID);
      hideThisElement.style.display = "none";
      showThisElement.style.display = "block";
}

function quickGo(showThisElementID) {
    // Store information in local storage
    localStorage.setItem('guideToShow', showThisElementID);
    
    // Navigate to the other page
    window.location.href = 'guides.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve information from local storage
    var guideToShow = localStorage.getItem('guideToShow');
    
    // Show the corresponding guide
    if (guideToShow) {
        var guideElement = document.getElementById(guideToShow);
        if (guideElement) {
            guideElement.style.display = 'block';
            willHide.style.display = "none";
        }
    }
    
    // Clear the stored information to avoid showing the same guide on subsequent visits
    localStorage.removeItem('guideToShow');
});