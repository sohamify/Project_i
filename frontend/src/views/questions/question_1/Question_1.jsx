import "./question_1.css";
import React from "react";
import { Link } from 'react-router-dom';
import { handleFormSubmit } from "../../../functions/formfunction";

const Question_1 = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    
  };

  return (
    <div className="question-1">
      <div className="navbar">
        <div className="navbar-child" />
        <div className="plans-pricicng">Plans & Pricing</div>
        <div className="wellness-hub">Wellness hub</div>
        <div className="login">Login</div>
        <div className="our-counselors">Our Counselors</div>
        <div className="how-it-works">How it works</div>
        <b className="project">Project</b>
        <div className="signup">Signup</div>
      </div>

      <div className="body">
        <div className="question">Do you think you are happy?</div>
        <form onSubmit={handleFormSubmit}>
          <div className="ans">
            <label>
              <input type="radio" name="happy" value="Y" id="y" />
              Yes
            </label>
          </div>
          
          <div className="ans">
            <label>
              <input type="radio" name="happy" value="N" id="n" />
              No
            </label>
          </div>
          
          
          <div className="prev-next-buttons">
        {/* Previous Button */}
        <Link to="/howitworks">
          <button className="prev" id="prev">Previous</button>
        </Link>

        {/* Next Button */}
        <Link to="/Question-2">
          <button className="next" type="submit" id="next">Next</button>
        </Link>
      </div>
        </form>
      </div>
    </div>
  );
};

export default Question_1;
