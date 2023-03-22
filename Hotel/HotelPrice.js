function calculatePrice(month, numStays) {
    let studioPrice = 0;
    let apartmentPrice = 0;
  
    // Determine the nightly rates based on the month
    switch(month) {
      case "May":
      case "October":
        studioPrice = 50;
        apartmentPrice = 65;
        break;
      case "June":
      case "September":
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        break;
      case "July":
      case "August":
        studioPrice = 76;
        apartmentPrice = 77;
        break;
      default:
        console.log("Invalid month entered.");
        return;
    }
  
    // Calculate the total price before any discounts
    let studioTotal = studioPrice * numStays;
    let apartmentTotal = apartmentPrice * numStays;
  
    // Apply discounts if applicable
    if (month === "May" || month === "October") {
      if (numStays > 14) {
        studioTotal *= 0.7; // 30% discount
      } else if (numStays > 7) {
        studioTotal *= 0.95; // 5% discount
      }
    } else if (month === "June" || month === "September") {
      if (numStays > 14) {
        studioTotal *= 0.8; // 20% discount
      }
    } else if (numStays > 14 && apartmentPrice > 0) { // Check if apartmentPrice > 0 to avoid divide by 0 error
      apartmentTotal *= 0.9; // 10% discount
    }
  
    // Format the output
    studioTotal = studioTotal.toFixed(2);
    apartmentTotal = apartmentTotal.toFixed(2);
  
    console.log(`Apartment: ${apartmentTotal} lv.`);
    console.log(`Studio: ${studioTotal} lv.`);
  }
console.log(calculatePrice("June", 20));