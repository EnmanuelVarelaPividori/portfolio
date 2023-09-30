import logo from '../logo.svg';
import '../static/main.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import cv_nederlands from '../files/cvnl.pdf';


function HomePage() {
  return (<div>
      <div className='desktop'>
    <Navbar/>
    <div className='content'>
    <div className='bgbox'></div>
      <div className='zindex'>
      <div id='home' className='block-title flex jcspacebetween'>
        
          <div className='flex aicenter'>
            <div className='white'>
              <h2 className='mono blue'>Hoi, ik benn</h2>
              <h1 className='league bigfont'>Enmanuel Varela</h1>
              <h5 className='mono'>Junior programmeur - Audiovisual editor</h5>
            </div>
          </div>
          <div className='flex aicenter'>
            <div className='mono white'>
            <a href={cv_nederlands} target='_blank' rel='noreferrer'>
              <div className='block-info flex jcspacebetween aicenter nodeco'>
              <h4 className='white'>Mijn CV</h4>
                <img className='block-icon noselect' src='/images/cv-icon-color.png' alt=''/>
              </div>
            </a>
            <a href='#projects'>
              <div className='block-info flex jcspacebetween aicenter'>
              <h4 className='white'>Mijn werk</h4>
                <img className='block-icon noselect' src='/images/company-icon.png' alt=''/>
              </div>
            </a>
            <a href='#contact'>
              <div className='block-info flex jcspacebetween aicenter'>
                <h4 className='white'>Over mij</h4>
                <img className='block-icon noselect' src='/images/aboutme-icon-color.png' alt=''/>
              </div>
            </a>
            </div>
          </div>
      </div>
      
      <div className='divisor'/>
      <div>
        <h1 className='mono blue'>Ervaring</h1>
        <h4 className='white roboto'>Meest van mijn programmerenvaardigheden heb ik zelf geleerd. Van WordPress naar Django
          en JavaScript. Ik zit op het HBO-ICT in Groningen om mij te professionaliseren. Ik heb ook ervaring met Adobe graphic-design programmas zoals 
           Illustrator, Premiere, Photoshop en After Effects.</h4>
      </div>
      <div class='linker' id="projects"></div>

      <div   className='p50px white roboto'>
        <div className='flex'> 
          <div className='logo noselect'>
            <img className='Sirv image-main' src='/images/amisalta-logo-white.png' alt=''/>
            <img className='Sirv image-hover' src='/images/amisalta-logo-active.png' alt=''/>
          </div>
          <div>
          <h3 className='grey mono'>Amisalta</h3>

            <h5>Zakenpartner en programmeur bij eigen webontwikkeling bedrijf met een vriend van mij. Logo zelf gemaakt.
               Begonnen met WordPress en daarna websites gecodeerd met Django python library.
               We moesten in 2021 helaas stoppen omdat we vanwege school niet genoeg vrije tijd hadden. Website is niet
               meer online.</h5>
          </div>
        </div>
      </div>
      <div className='divisor2'/>
      <div className='p50px white roboto'>
        <div className='flex'>
            <div className='logo noselect'>
              <a href='https://cabañasdeljaaukanigas.com/en/' target="_blank">
                <img className='Sirv image-main' src='/images/cabanas-logo-white.png' alt=''/>
                <img className='Sirv image-hover' src='/images/cabanas-logo-active.png' alt=''/>
              </a>
            </div>
            <div>
            <h3 className='grey mono'>Cabañas del Jaaukanigas</h3>
              <h5>Website gebouwd voor de camping van mijn familie in Argentinië. Website gecodeerd op Django python library en logo zelf gemaakt.
                Website heeft een PostgresSQL database om activiteiten en services te updaten, reserveringssysteem coming soon.
              </h5>
              <a href='https://cabañasdeljaaukanigas.com/en/' target="_blank"><button class="btn btn-link">Website</button></a>
            </div>
        </div>
      </div>
      <div className='divisor2'/>

        <div className='p50px white roboto'>
          <div className='flex'> 
            <div className='logo noselect'>
              <img className='logo-portfolio' src='/images/portfolio-logo2.png' alt=''/>
            </div>
            <div>
            <h3 className='grey mono'>Mijn Portfolio.</h3>

              <h5>Ik vind dat mijn Portfolio website ook een goede voorbeeld is van wat ik kan, dit is mijn eerste productie
                website gecodeerd op JavaScript. Logo zelf gemaakt.</h5>
            </div>
          </div>
        </div>
      

    </div>
    <div class='linker' id="contact"></div>

      </div>

      <div className='container2 white'>

          <div className='flex aicenter block-white black'>
            <img className='me-photo noselect' src='/images/me.png' alt=''/>
            <div>
            <h1 className='mono blue'>Over mij</h1>

              <h5>Ik ben Enmanuel, roepnaam Manu, en ik ben sinds jong geïnteresseerd geweest in computers en ICT.
                 Ik ben half Spaans half Argentijns en ik woon al bijna 3 jaar lang in Nederland dus
                  ik kan vloeiend Spaans en Nederlands.</h5>
              <h5>
              Mijn hobby's zijn basketballen, sportschool, reizen, films kijken en met vrienden afspreken. 
               Ik ben snel lerend en ik ben gedisciplineerd.
              </h5>
            </div>

          </div>
          <h4 className='sidepadding roboto'>
              Ik heb veel dingen zelf geleerd maar ik wil me professionaliseren met werkervaring bij IT-bedrijven. Als u interesse heeft, kunt u mij 
              via de onderstaande links bereiken:
          </h4>
              <div className='divisor2'/>

          <div className='flex jccenter aicenter'>
            <a href="mailto:varela.enmanuel@gmail.com" target="_blank">
              <div className='block-contact'>
                <div className='flex aicenter'>
                  <img className='contact-icon noselect' src='/images/mail.png' alt=''/>
                  <h5 className='black mono'>varela.enmanuel@gmail.com</h5>
                </div>
              </div>
            </a>
            <a href="tel:+31615666357" target="_blank">
              <div className='block-contact'>
                <div className='flex aicenter'>
                  <img className='contact-icon noselect' src='/images/phone-call.png' alt=''/>
                  <h5 className='black mono'>0615666357</h5>
                </div>
              </div>
            </a>
            <a href='https://github.com/EnmanuelVarelaPividori' target="_blank">
              <div className='block-contact'>
                <div className='flex aicenter'>
                  <img className='contact-icon noselect' src='/images/github.png' alt=''/>
                  <h5 className='black mono'>EnmanuelVarelaPividori</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
        </div>


        <div className='mobile'>
        <div className='content'>
      <div id='home-mobile' className='block-title jcspacebetween'>
        
          <div className='flex aicenter'>
            <div className='white'>
              <h2 className='mono blue'>Hoi, ik ben</h2>
              <h1 className='league bigfont'>Enmanuel Varela</h1>
              <h2 className='mono'>Junior programmeur - Audiovisual editor</h2>
            </div>
          </div>
            <a href={cv_nederlands} target='_blank' rel='noreferrer'>
              <div className='block-info flex jcspacebetween aicenter nodeco'>
              <h4 className='white'>Mijn CV</h4>
                <img className='block-icon noselect' src='/images/cv-icon-color.png' alt=''/>
              </div>
            </a>
            <a href='#contact-mobile'>
              <div className='block-info flex jcspacebetween aicenter'>
                <h4 className='white'>Over mij</h4>
                <img className='block-icon noselect' src='/images/aboutme-icon-color.png' alt=''/>
              </div>
            </a>
      </div>
      
      <div className='divisor'/>
      <div>
        <h1 className='mono blue'>Ervaring</h1>
        <h4 className='white roboto'>Meest van mijn programmerenvaardigheden heb ik zelf geleerd. Van WordPress naar Django
          en JavaScript. Ik zit op het HBO-ICT in Groningen om mij te professionaliseren. Ik heb ook ervaring met Adobe graphic-design programmas zoals 
           Illustrator, Premiere, Photoshop en After Effects.</h4>
      </div>
      <div class='linker' id="projects-mobile"></div>

      <div   className='p50px white roboto'>

          <div className='logo noselect flex jccenter'>
            <img className='Sirv image-main' src='/images/amisalta-logo-active.png' alt=''/>
          </div>
          <div>
          <h3 className='grey mono'>Amisalta</h3>

            <h5>Zakenpartner en programmeur bij eigen webontwikkeling bedrijf met een vriend van mij. Logo zelf gemaakt.
               Begonnen met WordPress en daarna websites gecodeerd met Django python library.
               We moesten in 2021 helaas stoppen omdat we vanwege school niet genoeg vrije tijd hadden. Website is niet
               meer online.</h5>
          </div>
      </div>
      <div className='divisor2'/>
      <div className='p50px white roboto'>
            <div className='logo noselect flex jccenter'>
              <a href='https://cabañasdeljaaukanigas.com/en/' target="_blank">
                <img className='Sirv image-main' src='/images/cabanas-logo-active.png' alt=''/>
              </a>
            </div>
            <div>
              <h3 className='grey mono center'>Cabañas del Jaaukanigas</h3>
              <h5>Website gebouwd voor een camping familie bedrijf in Argentinie. Website gecodeerd op Django python library en logo zelf gemaakt.
                Website heeft een PostgresSQL database om activiteiten en services te updaten, reserveringssysteem coming soon.
              </h5>
              <a href='https://cabañasdeljaaukanigas.com/en/' target="_blank"><button class="btn btn-link">Website</button></a>
            </div>
      </div>
      <div className='divisor2'/>

        <div className='p50px white roboto'>
            <div className='logo noselect flex jccenter'>
              <img className='logo-portfolio' src='/images/portfolio-logo2.png' alt=''/>
            </div>
            <div>
            <h3 className='grey mono'>Mijn Portfolio.</h3>

              <h5>Ik vind dat mijn Portfolio website ook een goede voorbeeld is van wat ik kan, dit is mijn eerste productie
                website gecodeerd op JavaScript. Logo zelf gemaakt.</h5>
            </div>
        </div>
      

    </div>
    <div class='linker' id="contact-mobile"></div>


      <div className='container2 white'>

          <div className=' aicenter block-white black'>
            <div className='flex jccenter'>
              <img className='me-photo noselect' src='/images/me.png' alt=''/>
            </div>
            <div>
            <h1 className='mono blue center'>Over mij</h1>

              <h5>Ik ben Enmanuel, roepnaam Manu, en ik ben sinds jong geïnteresseerd geweest in computers en ICT.
                 Ik ben half Spaans half Argentijns en ik woon al bijna 3 jaar lang in Nederland dus
                  ik kan fluent Spaans en Nederlands.</h5>
              <h5>
              Mijn hobby's zijn basketbalen, sportschool, reizen, films kijken en met vrienden afspreken. 
               Ik kan dingen snel leren en ik heb goede werkdicipline.
              </h5>
            </div>

          </div>
          <h4 className='sidepadding roboto'>
              Ik heb veel dingen zelf geleerd maar ik wil me professionaliseren met werkervaring bij IT-bedrijven. Als u interesse heeft, kunt u mij 
              via de onderstaande links bereiken:
          </h4>
              <div className='divisor2'/>

            <a href="tel:+31615666357" target="_blank">
              <div className='block-contact'>
                <div className='flex aicenter jccenter'>
                  <img className='contact-icon noselect' src='/images/phone-call.png' alt=''/>
                  <h5 className='black mono'>0615666357</h5>
                </div>
              </div>
            </a>
            <a href="mailto:varela.enmanuel@gmail.com" target="_blank">
              <div className='block-contact'>
                <div className='flex aicenter jccenter'>
                  <img className='contact-icon noselect' src='/images/mail.png' alt=''/>
                  <h5 className='black mono'>varela.enmanuel@gmail.com</h5>
                </div>
              </div>
            </a>
            
            <a href='https://github.com/EnmanuelVarelaPividori' target="_blank">
              <div className='block-contact'>
                <div className='flex aicenter jccenter'>
                  <img className='contact-icon noselect' src='/images/github.png' alt=''/>
                  <h5 className='black mono'>EnmanuelVarelaPividori</h5>
                </div>
              </div>
            </a>
        </div>
        </div>
      
        <Footer/>


    </div>

  );
  
}

export default HomePage;
