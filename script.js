//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
    // Retrieve values from the input fields
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value, 10);

    // Validate delay
    if (isNaN(delay) || delay < 0) {
        alert('Please enter a valid delay in milliseconds.');
        return;
    }

    // Display the message after the specified delay
    await displayMessageAfterDelay(text, delay);
});

async function displayMessageAfterDelay(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay)); // Introduce delay
    document.getElementById('output').innerText = message; // Display message
}
