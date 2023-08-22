import Home from './views/home/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HowItWorks from './views/howitworks/HowItWorks';
import Question_1 from './views/questions/question_1/Question_1';
import Question_2 from  './views/questions/question_2/Question_2'
import Question_3 from  './views/questions/question_3/Question_3'
import Question_4 from  './views/questions/question_4/Question_4'
import Question_5 from  './views/questions/question_5/Question_5'
import Question_6 from  './views/questions/question_6/Question_6'
import Question_7 from  './views/questions/question_7/Question_7'
import Question_8 from  './views/questions/question_8/Question_8'
import Question_9 from  './views/questions/question_9/Question_9'
import Question_10 from  './views/questions/question_10/Question_10'
import Question_11 from  './views/questions/question_11/Question_11'
import Question_12 from  './views/questions/question_12/Question_12'
import Question_13 from  './views/questions/question_13/Question_13'
import Question_14 from  './views/questions/question_14/Question_14'
function App() {
  return (
   
         <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/Question-1" element={<Question_1 />} />
          <Route path="/Question-2" element={<Question_2 />} />
          <Route path="/Question-3" element={<Question_3 />} />

          <Route path="/Question-4" element={<Question_4 />} />
          <Route path="/Question-5" element={<Question_5 />} />
          <Route path="/Question-6" element={<Question_6 />} />
          <Route path="/Question-7" element={<Question_7 />} />
          <Route path="/Question-8" element={<Question_8 />} />
          <Route path="/Question-9" element={<Question_9 />} />
          <Route path="/Question-10" element={<Question_10 />} />
          <Route path="/Question-11" element={<Question_11 />} />
          <Route path="/Question-12" element={<Question_12 />} />
          <Route path="/Question-13" element={<Question_13 />} />
          <Route path="/Question-14" element={<Question_14 />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
