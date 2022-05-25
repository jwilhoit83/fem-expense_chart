fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const max = Math.max(...data.map((day) => day.amount));

    data.forEach((day) => {
      const dayOfWeek = document.getElementById(day.day);
      dayOfWeek.style.height = `${(day.amount / max) * 10}rem`;
      dayOfWeek.firstElementChild.innerText = `$${day.amount}`
      if (day.amount === max) {
        dayOfWeek.style.backgroundColor = "var(--clr-primary-100";
      }
    });
  });
