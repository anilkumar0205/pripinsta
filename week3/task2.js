function calculatePetAge(petAge, conversionRate = 7) {
    const petYears = petAge * conversionRate;
    return `Your pet is ${petYears} years old in pet years!`;
}

document.getElementById('petAge1').innerText = calculatePetAge(2);
document.getElementById('petAge2').innerText = calculatePetAge(3, 5);
document.getElementById('petAge3').innerText = calculatePetAge(1, 4);
