import './Header.css';
import { useEffect } from 'react';

function Header() {

  useEffect( () => {
    const c = document.getElementById('header-triangle');
    const ctx = c.getContext("2d");
    ctx.moveTo(0, c.height);
    ctx.lineTo(c.width*.5, 0);
    ctx.lineTo(c.width, c.height);
    ctx.lineTo(0, c.height);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 4;
    ctx.stroke();
  });

  return (
    <header id='app-header' className="App-header">
        <div className='header-title'>
            <h3>ANÁHUAC <span className='heavy'>5.0</span></h3>
            <h4 className='manifiesto orange'>Manifiesto del futuro</h4>
        </div>
        <canvas id="header-triangle"></canvas>
    </header>
  );

}

export default Header;
