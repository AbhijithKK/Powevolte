import Footer from '../Footer/Footer'
import Header from '../header/Header'
import './Services.css'
const Services = () => {
  return (
    <>
    <div style={{
        zIndex:"15",
        position:"relative"
        }} className="header-container">
        <Header />
      </div>
      <div className="service">
        <div className="s-left">
            <div>Inveters</div>
            <p>Power Volte, the authorized dealer of inverters, UPS, and batteries in Calicut, brings you a wide range of reliable products. Our offerings include inverters, UPS, online UPS, batteries, line-interactive UPS, emergency lamps, battery chargers, and more. Power Volte proudly represents top brands such as Exide, Amaron, Sukam, Microtek, Base, APC, Usha, Crompton Greaves, and V GUARD in Calicut. Elevate your power solutions with Power Volte – your trusted partner for quality and performance.</p>
        </div>
        <div className="s-right">
            <img src="https://www.hindustantimes.com/ht-img/img/2023/03/14/400x225/Collage_Maker-14-Mar-2023-03-17-PM-3503_1678787254186_1678787267938_1678787267938.jpg" alt="" />
        </div>

      </div>
      <div className="service">
        <div className="s-left">
            <div>Battery</div>
            <p>Power Volte is a leading battery supplier in Calicut, Kerala. We deal with renowned battery brands such as Exide, Amaron, Luminous, Hi-Power, Prestolite, SF Sonic, Roots, Powersun, Power Box, and Su-Kam. Power Volte introduces an exclusive service designed to handle auto electrical emergencies. If you encounter start-up problems, battery failures, or UPS breakdowns, don't worry! Just give us a call, and we'll provide you with the support you need. Experience the reliability of Power Volte for all your power solutions.</p>
        </div>
        <div className="s-right">
            <img src="https://www.moglix.com/blog/wp-content/uploads/2019/08/blog-imageinverter-battery-.jpg" alt="" />
        </div>

      </div>
      <div className="service">
        <div className="s-left">
            <div>Solar Panel</div>
            <p>Power Volte stands as a leading solar panel dealer in Calicut, Kerala. We specialize in the sales and supply of solar panels, partnering with trusted brands such as Exide, Vicrom, Havells, LS, Kirloskar, Luminous, and UTL. At Power Volte, we are dedicated to providing high-quality solar panels, solar lights, and solar water heaters – offering a clean, reliable, and economical source of energy. Experience the brilliance of Power Volte for all your solar energy needs.</p>
        </div>
        <div className="s-right">
            <img src="http://inverterhouse.com/wp-content/uploads/2018/11/3ps.jpg" alt="" />
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Services
