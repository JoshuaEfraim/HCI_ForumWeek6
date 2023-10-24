const stepCountElement = document.getElementById('step-count');
const incrementButton = document.getElementById('Press');
const resetButton = document.getElementById('reset');

// Initialize step count
let stepCount = 0;

// Function to update the step count display
function updateStepCount() {
    stepCountElement.textContent = stepCount + ' / 10000';
}

// Function to increment step count
function incrementStep() {
    stepCount++;
    updateStepCount();
}

// Function to reset step count
function resetStep() {
    stepCount = 0;
    updateStepCount();
}

// Event listeners
incrementButton.addEventListener('click', incrementStep);
resetButton.addEventListener('click', resetStep);

// Initial update of the step count display
updateStepCount();