import './Main.css';

function Main() {
    return (
        <main>
            <div className='intro-baner'>
                <h2><span className='thin'>Cada pestañeo que damos </span> queda en el pasado <span className='thin'>y abre nuestros ojos</span> hacia el futuro.</h2>
            </div>
            <div className='concepto-container'>
                <h2 className='orange'>CONCEPTO</h2>
                <h4 className='light'>Los pilares que definen la vida humana</h4>
                <div className='els-concepto'>
                    <div className='el-concepto'>
                        <h4 className='orange'>NATURALEZA</h4>
                        <p>La proveedora de todos los recursos que utilizamos.</p>
                    </div>
                    <div className='el-concepto'>
                        <h4 className='orange'>HUMANIDAD</h4>
                        <p>El mundo de ideas que nos definen.</p>
                    </div>
                    <div className='el-concepto'>
                        <h4 className='orange'>TECNOLOGÍA</h4>
                        <p>Las herramientas con las que transformamos todo.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;