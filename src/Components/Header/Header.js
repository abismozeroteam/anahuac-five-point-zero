import "./Header.css";
import { useEffect } from "react";

function Header() {
  const headerAnimation = () => {
    const now = new Date();
    const speed = now.getMilliseconds() * .006;
    const amplitude = 3;
    const movex = Math.sin(speed)*amplitude;
    const movey = Math.cos(speed)*amplitude;
    const c = document.getElementById("header-triangle");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.moveTo(c.width*.1, c.height*.9 - movey);
    ctx.lineTo(c.width * 0.5, c.height*.1 + movey);
    ctx.lineTo(c.width*.9 - movex, c.height*.9 - movey);
    ctx.lineTo(c.width*.1, c.height*.9 - movey);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;
    ctx.stroke();
    window.requestAnimationFrame(headerAnimation);
  };

  useEffect(() => {
    window.requestAnimationFrame(headerAnimation);
  });

  return (
    <header id="app-header" className="App-header">
      <div className="header-title">
        <h3>
          ANÁHUAC <span className="heavy">5.0</span>
        </h3>
        <h4 className="manifiesto orange">Manifiesto del futuro</h4>
      </div>
      <canvas id="header-triangle"></canvas>
    </header>
  );
}

export default Header;
