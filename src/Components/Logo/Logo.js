import './Logo.css';
import { useState, useEffect } from "react";
import logoStatic from '../../Util/Images/logo-static.svg';

const identificadores = ['5.0', 'FivePointZero', 'CincoPuntoCero', 'CinqPointZéro', 'CinquePuntoZero', 'VijfPuntNul', 'FünfPunktNull'];

function Nunito(props) {
    return (
        <div className={`${props.color} nunito-sample ${props.ital}`}>
            <h6 className='thin'>{props.text}</h6>
            <h6 className='light'>{props.text}</h6>
            <h6 className='regular'>{props.text}</h6>
            <h6 className='medium'>{props.text}</h6>
            <h6 className='semibold'>{props.text}</h6>
            <h6><strong>{props.text}</strong></h6>
            <h6 className='heavy'>{props.text}</h6>
            <h6 className='black'>{props.text}</h6>
        </div>
    )
}

function Logo() {

    const [frame, setFrame] = useState(0);
    const [identificador, setIdentificador] = useState(0);

    const triangle = () => {
        // Variables
        const amplitude = 20;
        const movex = Math.sin(frame)*amplitude;
        const movey = Math.cos(frame)*amplitude;
        //const inc = 15;
        // Draw
        const c = document.getElementById("logo-triangle");
        const coordinates = {
            p1: {x: c.width*.3 + movex, y: c.height*.65 + movey},
            p2: {x: c.width *.5, y: c.height*.25 + movey*.1},
            p3: {x: c.width*.7 - movex, y: c.height*.65 + movey}
        }
        const ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.strokeStyle = "rgba(255, 38, 0, 1)";
        ctx.lineWidth = 3;
        // Triangle 1
        ctx.beginPath();
        ctx.moveTo(coordinates.p1.x, coordinates.p1.y);
        ctx.lineTo(coordinates.p2.x, coordinates.p2.y);
        ctx.lineTo(coordinates.p3.x, coordinates.p3.y);
        ctx.closePath();
        ctx.stroke();
        // // Triangle 2
        // ctx.beginPath();
        // ctx.moveTo(coordinates.p1.x+inc+movex*.5, coordinates.p1.y-inc*.6);
        // ctx.lineTo(coordinates.p2.x + movex, coordinates.p2.y);
        // ctx.lineTo(coordinates.p3.x-inc-movex*1.2, coordinates.p3.y-inc*.6+movey*.6);
        // ctx.closePath();
        // ctx.stroke();
        // // Triangle 3
        // ctx.beginPath();
        // ctx.moveTo(coordinates.p1.x+inc+movex*.5, coordinates.p1.y-inc*.6);
        // ctx.lineTo(coordinates.p2.x + movex, coordinates.p2.y);
        // ctx.lineTo(coordinates.p3.x-inc-movex*1.2, coordinates.p3.y-inc*.6+movey*.6);
        // ctx.closePath();
        // ctx.stroke();
        // Text
        ctx.font = "1.5rem Nunito";
        ctx.save();
        ctx.fillStyle = 'rgba(255, 38, 0, 1)';
        ctx.textAlign = "center";
        ctx.fillText("Humanidad", coordinates.p2.x, coordinates.p2.y - 15);
        ctx.fillText("Naturaleza", coordinates.p1.x, coordinates.p1.y + 30);
        ctx.fillText("Tecnología", coordinates.p3.x, coordinates.p3.y + 30);
        ctx.restore();
    };

    useEffect(()=> {
        triangle();
    });

    useEffect(() => {
        const triangInterval = setInterval( () => {setFrame(frame => frame+1)}, 150);
        return () => clearInterval(triangInterval);
    }, []);

    useEffect(() => {
        const idMasUno = setInterval( () => {
            setIdentificador(identificador => identificador+1)
        }, 1000);
        return () => clearInterval(idMasUno);
    }, []);

    return (
        <section id='logo-section' className='section-container'>
            <h2 className='orange'>Marca</h2>
            <h4 className='negro'>Elementos que componen la marca gráfica</h4>
            <br></br>
            <h3 className='orange'>Símbolo</h3>
            <p>La marca reflejará los pilares conceptuales por medio de un triángulo que mute de acuerdo al contexto, <strong>apuntando con la humanidad siempre hacia arriba.</strong></p>
            <canvas id="logo-triangle" width='400' height="400"></canvas>
            <h3 className='orange'>Logotipo</h3>
            <p>El logotipo utilizará el <strong>identificador 5.0 en distintos idiomas</strong> para representar la <strong>globalidad del mundo en que vivimos.</strong></p>
            <div id='logo-tipo'>
                <h5 className='orange semibold'><span className='black'>A</span>NÁHUAC</h5>
                <h5 className='light'>{identificadores[identificador%identificadores.length]}</h5>
            </div>
            <h3 className='orange'>Tipografía</h3>
            <p>El futuro no tiene que ser estremecedor, es por eso que una <strong>familia cálida y humana como Nunito,</strong> de <a href='https://fonts.google.com/specimen/Nunito' target="_blank" rel='noreferrer'>Vernon Adams,</a> es la tipografía ideal para la imagen.</p>
            <div className='fam-tipo'>
                <Nunito color='orange' text='Nunito' ital=''/>
                <Nunito color='negro' text='Vernon' ital='ital'/>
                <Nunito color='orange' text='Adams' ital=''/>
                <Nunito color='negro' text='Cálida' ital='ital'/>
                <Nunito color='orange' text='Round' ital=''/>
                <Nunito color='negro' text='Soft' ital='ital'/>
                <p className='variable orange'>Variable y Práctica</p>
            </div>
            <h3 className='orange'>Gama cromática</h3>
            <p>La combinación cromática que se eligió combina la fuerza de un nuevo anaranjado Anáhuac con la elegancia y novedad de un negro azulado que ayuda a crear un contraste ideal.</p>
            <div className='gama'></div>
            <div className='logo-static' style={{backgroundImage: `url(${logoStatic})`}}></div>
        </section>
    )
}

export default Logo;