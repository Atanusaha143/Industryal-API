const Dashboard = () => {
  return (
    <>
      <div className="col-12 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>Dashboard</h3>
          </center>
          {/* component */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="card w-100 bg-light text-dark m-3 border border-primary">
                <div
                  className="card-header bg-dark     text-light"
                  align="center"
                >
                  <b>Current Affairs</b>
                </div>
                <div className="card-body">
                  <div className="card-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
