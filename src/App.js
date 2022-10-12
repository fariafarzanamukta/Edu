import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import QuizDetails from './Pages/QuizDetails/QuizDetails';
import Statistics from './Pages/Statistics/Statistics';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/quizDetails/:topicId" element={<QuizDetails />}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
