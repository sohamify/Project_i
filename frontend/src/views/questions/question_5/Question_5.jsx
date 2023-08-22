import "./question_1.css";
import { Link } from "react-router-dom";
const Question_5 = () => {
  
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
        <div className="question">Do you feel information about health and support services is clear and accessible to you?</div>
        <form onSubmit={handleFormSubmit}>
          <div className="ans">
            <label>
              <input type="radio" name="happy" value="Y" />
              Yes
            </label>
          </div>
          
          <div className="ans">
            <label>
              <input type="radio" name="happy" value="N" />
              No
            </label>
          </div>
          
          
          <div className="prev-next-buttons">
        {/* Previous Button */}
        <Link to="/Question-4">
          <button className="prev">Previous</button>
        </Link>

        {/* Next Button */}
        <Link to="/Question-6">
          <button className="next">Next</button>
        </Link>
      </div>
        </form>
      </div>
    </div>
  );
};

export default Question_5;