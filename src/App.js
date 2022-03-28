import logo from './logo.svg';
import './App.css';
import image from './image.webp'
import Profile from './Profile/Profile'

function App() {
  const fullName = "haider saidi";
  const bio = "react props";
  const profession = "student";

  return (
    <div className="App">
      <Profile fullName={fullName} bio={bio} profession={profession} >
        <img src = {image}/>
      </Profile>
    </div>
  );
}

export default App