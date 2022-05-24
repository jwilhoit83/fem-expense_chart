fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const max = Math.max(...data.map((day) => day.amount));

    data.forEach((day) => {
      const dayOfWeek = document.getElementById(day.day);
      dayOfWeek.style.height = `${(day.amount / max) * 7.5}rem`;
      dayOfWeek.setAttribute("title", `$${day.amount}`);
      if (day.amount === max) {
        dayOfWeek.style.backgroundColor = "var(--clr-primary-100";
      }
    });
  });
