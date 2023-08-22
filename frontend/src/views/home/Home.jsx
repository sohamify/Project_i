import "./home.css";
const Home = () => {
  return (
    <div className="home-page">
      <div className="navbar">
        <div className="navbar-child" />
        <div className="plans-pricicng">{`Plans & Pricicng`}</div>
        <div className="wellness-hub">Wellness hub</div>
        <div className="login">Login</div>
        <div className="our-counselors">Our Counselors</div>
        <div className="how-it-works">How it works</div>
        <b className="project">Project</b>
        <div className="signup">Signup</div>
      </div>
      <div className="body">
        <img
          className="home-bg"
          alt=""
          src="https://images.pexels.com/photos/5723261/pexels-photo-5723261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="body-child" />
        <b className="welcome-to-the-container">
          <span className="welcome-to-the-container1">
            <p className="welcome-to-the">Welcome to the Project</p>
          </span>
        </b>
        <div className="body-item" />
        <div className="introducing-a-mental">
        Welcome to our compassionate online haven, dedicated to nurturing the mental well-being of seniors. Our website is a guiding light, offering resources, support,
        and a caring community to empower older individuals on their journey to emotional wellness.
        </div>
        <a href="howitworks" target="_self" rel="noopener noreferrer">
        <button className='get-started'>Get Started</button>
      </a>

      </div>
    </div>
  );
};

export default Home;
