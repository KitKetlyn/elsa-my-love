import elsa from './elsa.jpeg';
import insta from './icones/insta.jpg';
import face from './icones/facebook.png';
import twitter from './icones/twitter.png';
import youtube from './icones/youtube.png';
import './styles.css';

function App() {
  return (
    <div className="parent">
            <div className="sidebar">
                <div className="sidebar-pos">
                    <div className="img-sidebar">
                        <img src={elsa} />
                    </div>
                    <div className="menu">
                        <a href="#">Eu</a>
                        <a href="#">Te</a>
                        <a className="selected"  href="#">Amo</a>
                    </div>
                </div>
            </div>
            <div className="content">
                <section className="descrição">
                    <h2>JOÃO <span>PEDRO</span> </h2>
                    <h3>Apenas um nenêm <span >  iloveyou@gmail.com</span></h3>
                    <div className="img">
                        <a target="_blanck" href="https://www.instagram.com/elcoss347/?hl=pt-br" ><img src={insta} alt="insta icon" /></a>
                        <a target="_blanck" href="https://www.youtube.com/" ><img src={youtube} alt="youtube icon" /></a>
                        <a target="_blanck" href="https://twitter.com/login?lang=pt" ><img src={twitter} alt="twitter icon" /></a>
                        <a target="_blanck" href="https://pt-br.facebook.com/" ><img src={face} alt="facebook icon" /></a>
                    </div>
                    <p>Coisa mais perfeita do mundo aaaaaaaaaaaaaaaaaaa, to morrendo de sdd e quelo mtmtmtmt te ver. <br /> To ansiosa pelo final de semana e meus braços tão doendo de tanto fazer sua surpresa.</p>
                </section>
            </div>
        </div>
  );
}

export default App;
