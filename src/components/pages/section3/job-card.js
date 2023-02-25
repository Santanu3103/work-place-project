import React from "react";
import "./job-card.css";
import companyLogo from './company-logo.png'

function JobCard() {
  return (
    <div className="outer">
      <div className="jobCard">
        <div className="company">
          <div className="image">
            <img src={companyLogo} />
          </div>
          <div className="name">
            <h2>Microsoft</h2>
            <p>Freelance</p>
          </div>
        </div>
        <div className="role">
          <h2 className="position">Senior UI Designer</h2>
          <p className="time">Fulltime</p>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          nunc ac a magna at elementum. Cras arcu varius in aliquam habitant
          fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.
        </p>
        <div className="apply">
          <p>
            <big>$2500</big>/month
          </p>
          <button className="card-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
