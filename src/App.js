import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SignOut from './components/SignOut';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Default Route */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
