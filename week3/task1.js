function tellFortune(numChildren, partnerName, location, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    return fortune;
}

document.getElementById('fortune1').innerText = tellFortune(2, 'Alice', 'Paris', 'Software Developer');
document.getElementById('fortune2').innerText = tellFortune(3, 'Bob', 'New York', 'Artist');
document.getElementById('fortune3').innerText = tellFortune(1, 'Charlie', 'Tokyo', 'Engineer');
