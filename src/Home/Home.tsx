import Header from "../header/Header";
import Carosal from "../Carosal/Carosal";
import "./Home.css";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div style={{
        zIndex:"15",
        position:"relative"
        }} className="header-container">
        <Header />
      </div>
      <div className="carosal-div">
        <Carosal />
      </div>
      <div className="home-mid-container">
        <div className="hmc1">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/2/FV/SB/US/156763847/jtd6vrjjw7yppu8flz776l41qkgobvavlgdarmq0-500x500.png"
            alt=""
          />
          <h3>INVERTER</h3>
          <p>
            Power Volt stands out as a premier inverter provider in Orkatteri
            and its neighboring areas, offering not only competitive prices but
            also an extensive selection of inverter brands, including renowned
            names like Microtek and Luminous.
          </p>
        </div>
        <div className="hmc1">
          <img
            src="https://powerex.co.in/html/powerex/images/why_choose_us_img.png"
            alt=""
          />
          <h3>TUBULAR BATTERY</h3>
          <p>
            In the enchanting locale of Orkatteri, Power Volt emerges as the
            go-to destination for superior battery solutions. As the finest
            battery dealers in the region, Power Volt proudly offers a diverse
            range of batteries, including esteemed brands such as Exide,
            Luminous, PowerX, and more.
          </p>
        </div>
        <div className="hmc1">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/6/317911412/YG/GB/WX/10636468/sukam-inverter-repairing-service-500x500.jpg"
            alt=""
          />
          <h3>SERVICE</h3>
          <p>
            Power Volt provides comprehensive inverter services in Orkatteri and
            nearby areas. We offer a wide range of inverter solutions, servicing
            all brands such as Microtek, Luminous, and more, ensuring the best
            prices and exceptional service..
          </p>
        </div>
      </div>
      <div className="products">
        <h2>Our Products</h2>
        <hr />
        <div className="imageWrapper">
          <div className="image">
            <img
              src="http://inverterhouse.com/wp-content/uploads/2021/08/4.jpg"
              alt=""
              />
              <div className="img-text">INVERTER</div>
          </div>
          <div className="image">
            <img
              src="http://inverterhouse.com/wp-content/uploads/2021/08/5.jpg"
              alt=""
              />
                <div className="img-text">UPS</div>
          </div>
          <div className="image">
            <img
              src="http://inverterhouse.com/wp-content/uploads/2021/08/6.jpg"
              alt=""
              />
              <div className="img-text">TUBLER BATTERY</div>
          </div>
          <div className="image">
            <img
              src="http://inverterhouse.com/wp-content/uploads/2021/08/7.jpg"
              alt=""
              />
              <div className="img-text">AUTOMOTIVE BATTERY</div>
          </div>
          <div className="image">
            <img
              src="http://inverterhouse.com/wp-content/uploads/2018/11/5.jpg"
              alt=""
              />
              <div className="img-text">SOLAR WATER HEATER</div>
          </div>
          <div className="image">
            <img
              src="http://inverterhouse.com/wp-content/uploads/2018/11/6.jpg"
              alt=""
              />
              <div className="img-text">SOLAR PANELS</div>
          </div>
        </div>
      </div>
    <div className="mlm-text">
        <div className="blink">
        പവർകട്ടിനെ ഓർത്ത് ഇനി ടെൻഷൻ വേണ്ട.     
           </div>
        <div className="blink1">
        എല്ലാ കമ്പനികളുടെ ബാറ്ററിയും ഇൻവേറ്ററുകളും സർവീസ് ചെയ്ത് കൊടുക്കുന്നു.           </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
