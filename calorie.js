const foodSelectors = document.querySelectorAll('select.choices');
const totalCaloriesSpan = document.getElementById('totalcalories');

foodSelectors.forEach(selector => {
  selector.addEventListener('change', calculateTotalCalories);
});

function calculateTotalCalories() {
  let totalCaloriesValue = 0;

  foodSelectors.forEach(selector => {
    const selectedOption = selector.options[selector.selectedIndex];
    const calories = parseInt(selectedOption.getAttribute('data-calories'));
    if (!isNaN(calories)) {
      totalCaloriesValue += calories;
    }
  });

  totalCaloriesSpan.textContent = totalCaloriesValue;
}