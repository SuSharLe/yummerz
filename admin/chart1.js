const ctx = document.getElementById("barchart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Mac and Cheese",
      "Fried Ice Cream",
      "Burger",
      "Pizza",
      "Fish and Chips",
    ],
    datasets: [
      {
        label: "Total Money Earned From Each Food",
        data: [12000, 19000, 6000, 9000, 3000, 3000],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
