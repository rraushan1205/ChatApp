import "./App.css";
import ChatBase from "./component/ChatBase";
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      <div className="bg-black text-white">
        <NavBar />
        <ChatBase />
      </div>
    </>
  );
}

export default App;
