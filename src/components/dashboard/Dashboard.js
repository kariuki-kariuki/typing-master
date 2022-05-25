import "./dashboard.css"
function Dashboard(){

  return (
    <div className="container-main bg-dark">
      <div className="row">
        <div className="col-sm-3">
          <div className="mycard d-flex align-items-center flex-row justify-content-center">
            <div className="circle text-center d-flex align-items-center flex-row justify-content-center">
              <span className="tn">17K</span><span className="tText">tests</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Dashboard;