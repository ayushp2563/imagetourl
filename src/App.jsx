import ImageUpload from "./components/ImageUpload";
import "./App.css";
import Steps from "./components/Steps";
import { inject } from "@vercel/analytics";

inject();

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Steps />
      <ImageUpload />
    </div>
  );
}

export default App;
