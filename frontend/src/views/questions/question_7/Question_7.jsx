import "./question_1.css";
import { Link } from "react-router-dom";
const Question_7 = () => {
  
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
        <div className="question">Are home care services including health personal care and house keeping available and accessible to you?
</div>
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
        <Link to="/Question-6">
          <button className="prev">Previous</button>
        </Link>

        {/* Next Button */}
        <Link to="/Question-8">
          <button className="next">Next</button>
        </Link>
      </div>
        </form>
      </div>
    </div>
  );
};

export default Question_7;