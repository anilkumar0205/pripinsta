function calculateCoffeeSupply(age, cupsPerDay, maxAge = 80) {
    const yearsRemaining = maxAge - age;
    const totalCups = Math.round(yearsRemaining * cupsPerDay * 365);
    return `You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`;
}

// Example usage:
document.getElementById('coffeeSupply1').innerText = calculateCoffeeSupply(25, 3);
document.getElementById('coffeeSupply2').innerText = calculateCoffeeSupply(30, 2.5);
document.getElementById('coffeeSupply3').innerText = calculateCoffeeSupply(40, 4);
