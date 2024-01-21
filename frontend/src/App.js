import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import "./base.css"

function App() {
  return (

    <div className="App" style={{height:'100vh', width:"100%", backgroundColor:'#37445d'}}>
      <Navbar name="Next Ai" />
      <Chatbot/>
    </div>

  );
}

export default App;
