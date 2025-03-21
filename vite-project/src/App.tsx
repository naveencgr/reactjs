import { useState } from "react";
import Alerts from "./components/Alerts";
import SubmitButton from "./components/SubmitButton";
import ListGroup from "./ListGroup";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && <Alerts onClick={() => setShowAlert(false)} />}
      <SubmitButton onClick={() => setShowAlert(true)} />
    </div>
  );
}

export default App;
