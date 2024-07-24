function metersToFeet(meters) {
    const feet = meters * 3.281;
    return `${meters} meters is equal to ${feet.toFixed(2)} feet.`;
}

function feetToMeters(feet) {
    const meters = feet * 0.3048;
    return `${feet} feet is equal to ${meters.toFixed(2)} meters.`;
}

// Example usage:
document.getElementById('metersToFeet1').innerText = metersToFeet(10);
document.getElementById('metersToFeet2').innerText = metersToFeet(25);
document.getElementById('feetToMeters1').innerText = feetToMeters(32.8);
document.getElementById('feetToMeters2').innerText = feetToMeters(100);
