import './Footer.css'
import wts from '../assets/square-whatsapp.svg'
import insta from '../assets/square-instagram.svg'
import fone from '../assets/phone-solid.svg'
const Footer = () => {
  return (
    <>
      <div id='contact' className="footer">
        <h3>Contact us</h3>
        <div className="contacts">
            <div><img src={fone} alt="" /> 9846816552</div>
            <div><img src={wts} alt="" /> 7306871041</div>
            <div><img src={insta} alt="" />powervolt</div>
        </div>
        <div className="copyright1">
           <h2>POWER VOLTE</h2>
           <h4>BATTERY & INVERTER</h4>
           <p>NEAR,JUMA MASJID,VAIKKILASSERY ROAD ORKKATTERI</p>
        </div>
        <div className="copyright">
            &copy;Power Volte2023
        </div>
      </div>
    </>
  )
}

export default Footer
