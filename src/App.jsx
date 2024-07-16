import ImageUpload from "./components/ImageUpload";
import "./App.css";
import Steps from "./components/Steps";
import { inject } from "@vercel/analytics";
import Tip from "./components/Tip";

inject();

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Steps />
      <Tip />
      <ImageUpload />
    </div>
  );
}

export default App;
