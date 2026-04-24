/**
 * Vantum deck — Chart.js (labels must not contain raw newlines inside JS strings)
 */
function initCharts() {
  const primary = "#06173B";
  const secondary = "#D1AF61";
  const muted = "#4A6FA5";

  const ownershipEl = document.getElementById("ownershipChart");
  if (ownershipEl) {
    new Chart(ownershipEl.getContext("2d"), {
      type: "doughnut",
      data: {
        labels: [
          "Mom-and-Pop / Independent",
          "Regional Operators",
          "Institutional / REITs",
        ],
        datasets: [
          {
            data: [85, 10, 5],
            backgroundColor: [primary, muted, secondary],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              font: { family: "Inter", size: 11 },
              padding: 20,
              usePointStyle: true,
            },
          },
        },
      },
    });
  }

  const capRateEl = document.getElementById("capRateChart");
  if (capRateEl) {
    new Chart(capRateEl.getContext("2d"), {
      type: "bar",
      data: {
        labels: [
          "Sub-Institutional\n(25–50 pads)",
          "Small Parks\n(50–100 pads)",
          "Mid-Market\n(100–400 pads)",
          "Institutional\n(400+ pads)",
        ],
        datasets: [
          {
            label: "Cap Rate (%)",
            data: [10.5, 8.0, 6.5, 5.75],
            backgroundColor: [primary, primary, muted, secondary],
            barThickness: 40,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        plugins: { legend: { display: false } },
        scales: {
          x: {
            min: 0,
            max: 12,
            ticks: {
              callback: function (value) {
                return value + "%";
              },
              font: { family: "Inter", size: 10 },
            },
            grid: { color: "#f0f0f0" },
          },
          y: {
            ticks: {
              font: { family: "Inter", size: 11, weight: "500" },
              color: primary,
            },
            grid: { display: false },
          },
        },
      },
    });
  }

  const instGrowthEl = document.getElementById("institutionalGrowthChart");
  if (instGrowthEl) {
    new Chart(instGrowthEl.getContext("2d"), {
      type: "line",
      data: {
        labels: ["2017", "2019", "2021", "2023", "2025"],
        datasets: [
          {
            label: "Institutional Ownership (%)",
            data: [13, 15, 20, 22, 23],
            borderColor: primary,
            backgroundColor: "rgba(6, 23, 59, 0.1)",
            fill: true,
            tension: 0.4,
            pointBackgroundColor: secondary,
            pointBorderColor: primary,
            pointRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            min: 0,
            max: 30,
            ticks: {
              callback: function (value) {
                return value + "%";
              },
              font: { family: "Inter", size: 10 },
            },
            grid: { color: "#f0f0f0" },
          },
          x: {
            ticks: { font: { family: "Inter", size: 10 } },
            grid: { display: false },
          },
        },
      },
    });
  }

  const regionalEl = document.getElementById("regionalCapRateChart");
  if (regionalEl) {
    new Chart(regionalEl.getContext("2d"), {
      type: "bar",
      data: {
        labels: [
          "E. South Central",
          "Midwest",
          "Southwest",
          "Mountain",
          "Pacific",
          "New England",
        ],
        datasets: [
          {
            label: "2024 Cap Rate",
            data: [6.07, 5.9, 5.5, 4.74, 5.2, 5.1],
            backgroundColor: [
              secondary,
              secondary,
              muted,
              primary,
              primary,
              primary,
            ],
            maxBarThickness: 26,
            borderRadius: 2,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        layout: { padding: { left: 4, right: 16, top: 8, bottom: 8 } },
        datasets: {
          bar: {
            categoryPercentage: 0.68,
            barPercentage: 0.9,
          },
        },
        plugins: { legend: { display: false } },
        scales: {
          x: {
            min: 4,
            max: 7,
            ticks: {
              callback: function (value) {
                return value + "%";
              },
              font: { family: "Inter", size: 10 },
              maxTicksLimit: 8,
            },
            grid: { color: "#f0f0f0", drawBorder: false },
            border: { display: false },
          },
          y: {
            ticks: {
              font: { family: "Inter", size: 11, weight: "500" },
              color: primary,
              padding: 8,
            },
            grid: { display: false, drawBorder: false },
            border: { display: false },
          },
        },
      },
    });
  }

  const supplyEl = document.getElementById("supplyDemandChart");
  if (supplyEl) {
    new Chart(supplyEl.getContext("2d"), {
      type: "bar",
      data: {
        labels: ["2000-05", "2006-10", "2011-15", "2016-20", "2021-24"],
        datasets: [
          {
            label: "New Completions",
            data: [120, 80, 60, 45, 50],
            backgroundColor: muted,
            barThickness: 20,
          },
          {
            label: "Demolitions",
            data: [40, 50, 55, 60, 65],
            backgroundColor: secondary,
            barThickness: 20,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { font: { family: "Inter", size: 10 }, usePointStyle: true },
          },
        },
        scales: {
          y: {
            ticks: { font: { family: "Inter", size: 10 } },
            grid: { color: "#f0f0f0" },
          },
          x: {
            ticks: { font: { family: "Inter", size: 10 } },
            grid: { display: false },
          },
        },
      },
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCharts);
} else {
  initCharts();
}
