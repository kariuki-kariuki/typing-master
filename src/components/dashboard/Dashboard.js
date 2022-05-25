import "./dashboard.css"
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
function Dashboard(){
  var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var yValues = [55, 49, 44, 24, 15];
  var barColors = ["red", "green", "blue", "orange", "brown"];
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "World Wine Production 2018",
      },
    },
  });
  return (
    <div className="container-main bg-dark">
      <div className="row">
        <div className="col-sm-3">
          <div className="mycard d-flex align-items-center flex-row justify-content-center">
            <div className="circle text-center d-flex align-items-center flex-row justify-content-center">
              <span className="tn">17K</span>
              <span className="tText">tests</span>
            </div>
          </div>
          <div className="=col-sm-9">
            <div className="conatainer-main">
              <canvas id="myChart" style="width:100%;max-width:600px"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Dashboard;