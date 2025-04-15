function calculateAge() {
    const input = document.getElementById('birthDate').value;
    const result = document.getElementById('ageResult');
    const extra = document.getElementById('extraInfo');
  
    if (!input) {
      alert('Please select a birthdate!');
      return;
    }
  
    const birthDate = new Date(input);
    const today = new Date();
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const bornDay = weekdays[birthDate.getDay()];
  
    result.innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
    extra.innerText = `You were born on a ${bornDay}. 🎂`;
  
    // Optional motivational message
    if (years < 18) {
      extra.innerText += " You're still growing up – enjoy every moment!";
    } else if (years < 40) {
      extra.innerText += " You're in the prime of your life!";
    } else {
      extra.innerText += " You're full of wisdom and experience!";
    }
  }
  