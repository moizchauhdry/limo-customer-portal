<!-- src/components/RideDistanceLine.vue -->
<template>
  <div class="rounded-xl bg-white p-4 shadow">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

const chartData = {
  labels: ["-80", "-70", "-60", "-50", "-40", "-30", "-20", "Today"],
  datasets: [
    {
      label: "Previous Month Rides",
      data: [10, 400, 0, 500, 150, 330, 100, 45],
      borderColor: "#E1057C",
      backgroundColor: "#E1057C",
      tension: 0.3,
    },
    {
      label: "Current Month Rides",
      data: [15, 20, 25, 30, 35, 40, 45, 50],
      borderColor: "#50ABB0",
      backgroundColor: "#50ABB0",
      tension: 0.3,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      align: "center",
      labels: {
        usePointStyle: true,
        boxWidth: 8,
        padding: 11, // space between the two items
        // force single horizontal row
        generateLabels(chart) {
          return ChartJS.defaults.plugins.legend.labels.generateLabels(chart);
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 500,
      ticks: { callback: (v) => v + " km" },
    },
  },
};
</script>
