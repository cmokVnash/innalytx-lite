import React from "react";

const RightSider = () => {
  return (
    <>
      <div className="owner">
        <div className="owner-img">
          <img
            style={{ width: "65px", height: "65px", borderRadius: "6px" }}
            src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg"
            alt=""
          />
        </div>
        <div className="owner-details">
          <h3 style={{ color: "#e5e5e5", fontSize: "18px" }}>
            Hello, I'm John Doa
          </h3>
          <p>Manager</p>
        </div>
      </div>
    </>
  );
};

export default RightSider;
