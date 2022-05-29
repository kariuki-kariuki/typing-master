import "./graph.css"

function Graph({errorRate, accuracy, timespeed}, ){

  return (
    <div className="graph">
      <span className="spanone d-flex flex-row justify-content-around">
        <span>10 %</span>
        <span>20 %</span>
        <span>30 %</span>
        <span>40 %</span>
        <span>50 %</span>
        <span>60 %</span>
        <span>70 %</span>
        <span>80 %</span>
        <span>90 %</span>
      </span>
      <br />
      <p>Time Speed</p>
      <span className="spantwo">
        <span className="span2" style={{ width: `${timespeed}%` }}>
        </span>
      </span>
      <br />
      <p>ErrorRate</p>
      <span className="spanthree">
        <span className="span3" style={{ width: `${errorRate}%` }}>
        </span>
      </span>
      <br />
      <p>Accuracy</p>
      <span className="spanfour">
        <span className="span4" style={{ width: `${accuracy}%` }}>
        </span>
      </span>
      <br />
      {/* <span className="spanfive">
        <span className="span5">Hello</span>
      </span> */}
    </div>
  );
}

export default Graph