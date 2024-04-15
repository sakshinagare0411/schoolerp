import React from 'react';
import './Studprofile.css';

const StudentProfile = () => {
  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4 className="font-weight-bold py-3 mb-4">
        Student Profile
      </h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">Profile</a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Attendance</a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-info">Time-Table</a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="account-general">
                <div className="card-body media align-items-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt className="d-block ui-w-80" />
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <div>
                    <p><strong>Name :</strong> John Doe</p>
                  </div>
                  <div>
                    <p><strong>Class :</strong> 10th</p>
                  </div>
                  <div>
                    <p><strong>Roll No :</strong> 13</p>
                  </div>
                  <div>
                    <p><strong>Address :</strong> Ram nagar,Ankai</p>
                  </div>
                  <div>
                    <p><strong>Father's Name :</strong> Johnny Doe</p>
                  </div>
                  <div>
                    <p><strong>Mother's Name :</strong> Jiya Doe</p>
                  </div>
                </div>
              </div>
              {/* Other tabs content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;