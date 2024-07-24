function calcPerimeter(length, width) {
    const perimeter = 2 * (length + width);
    return `The perimeter is ${perimeter}`;
}

function calcArea(length, width) {
    const area = length * width;
    return `The area is ${area}`;
}

// Example usage:
document.getElementById('perimeter').innerText = calcPerimeter(5, 10);
document.getElementById('area').innerText = calcArea(5, 10);
