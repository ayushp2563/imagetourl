import ImageUpload from "./components/ImageUpload";
//import logo from "../src/assets/IMAGE TO URL.png";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-800 px-4 py-4 ">
      <div className="flex items-center flex-col justify-center bg-white p-8 rounded-2xl shadow-lg">
        {/* <img className="p-4 w-60 h-66" src={logo} /> */}
        <h1 className="jersey-20-regular">Image to URL</h1>
        <ImageUpload />
        <div className="text-black flex items-center justify-center mt-4">
          Made with 💛 by Ayush Prajapati
        </div>
      </div>
    </div>
  );
}

export default App;
