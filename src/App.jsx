import "./App.css";
import QRCodeImage from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="card">
      <img src={QRCodeImage} alt="qr code" />
      <div className="container">
        <p id="title">{"Improve your front-end skills by building projects"}</p>
        <p id="text">
          Scan the QR code to visit Frontend Mentor and take your code skills to
          the next level
        </p>
      </div>
    </div>
  );
}

export default App;
