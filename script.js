function volume_sphere(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve the radius value from the input field
    let radius = parseFloat(document.getElementById("radius").value);
    
    // Validate the input: ensure radius is a non-negative number
    if (isNaN(radius) || radius < 0) {
		 document.getElementById("volume").value =NaN;
        alert("Please enter a valid non-negative number for the radius.");
        return;
    }
    
    // Calculate the volume of the sphere using the formula
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    // Display the calculated volume in the designated output field, rounded to four decimal places
    document.getElementById("volume").value = volume.toFixed(4);
}

// Add an event listener for the form submission
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};


