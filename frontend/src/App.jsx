import "./App.css";
// import Login from "./pages/Login/login"
import Home from "./pages/Home/home"
import MessageContainer from "./components/messages/messageContainer";
// import SignUp from "./pages/Signup/signup";


function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Login/> */}
      <MessageContainer/>

    
    </div>
  );
}

export default App;
