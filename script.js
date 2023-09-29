const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	// Get all elements with class "price"
  const priceElements = document.querySelectorAll('.price');

  let totalPrice = 0;

  // Loop through the price elements and sum up the prices
  priceElements.forEach(priceElement => {
    const price = parseFloat(priceElement.textContent);
    if (!isNaN(price)) {
      totalPrice += price;
    }
  });

  // Create a new row for displaying the total price
  const table = document.querySelector('table');
  const newRow = table.insertRow(-1); // -1 inserts at the end of the table
 newRow.id ="ans"; // Assign an ID to the newRow(before giving id i got error to give id)
	const cell1 = newRow.insertCell(0);
  

  cell1.textContent = totalPrice;
  
  
};

getSumBtn.addEventListener("click", getSum);

