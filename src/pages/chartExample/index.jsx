import { Bar } from "react-chartjs-2";
import LayoutV1 from "../../layouts/v1";
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

const ChartPage = () => {
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title, // bisa dikomen kalo tidak mau pake title
    Tooltip, // bisa dikomen kalo tidak mau pake tooltip
    Legend // bisa dikomen kalo tidak mau pake legend
  );

  const options = {
    responsive: true,
    // plugins legend dan titlenya bisa dikomen kalo tidak digunakan, dan tidak perlu register di atas.
    // kalau pake harus diregister dulu di Chart.register
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart Example",
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [900, 290, 90, 780, 890, 100, 200],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderRadius: 100,
        barPercentage: 0.2,
        borderSkipped: false,
      },
    ],
  };

  return (
    <LayoutV1>
      <div>ChartPage</div>
      <div style={{ width: "600px", height: "400px" }}>
        <Bar options={options} data={data} />
      </div>
    </LayoutV1>
  );
};

export default ChartPage;
