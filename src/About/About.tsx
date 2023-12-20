import { useRef } from 'react'
import Footer from '../Footer/Footer'
import Header from '../header/Header'
import './About.css'
const About = () => {
    const ref=useRef<any>(null)
    const LeftBtn=()=>{
      if(ref.current){
        ref.current.scrollBy({left:-100,behavior:"smooth"})
      }
    }
    const RightBtn=()=>{
        if(ref.current){
            ref.current.scrollBy({
                left:100,behavior:"smooth"
            })
        }
    }
  return (
    <div style={{
        height:"100vh"
    }}>
     <div style={{
        zIndex:"15",
        position:"relative"
        }} className="header-container">
        <Header />
      </div>
      <div className="about">
        <h2>Who We Are?</h2>
        <p>Power Volte, committed to delivering comprehensive solutions for power backup challenges and elevating power quality through cutting-edge technologies and renewable energy sources in Calicut & Kerala.

As the service and manufacturing sectors continue to grow, creating strain on existing power resources, Power Volte stands at the forefront, addressing the escalating demand for reliable power solutions.

With over five decades of expertise in the power electronics and battery domain, the founder of Power Volte possesses extensive knowledge in online UPS, inverters, batteries, and other power electronic equipment.

Our diverse range of power conditioning products caters to various sectors, including homes, offices, educational institutions, petrol bunks, hospitals, hotels, IT, ITES, and mission-critical applications.

Power Volte is committed to providing customers with the latest technology at an exceptionally cost-effective price, ushering in a new era of innovation and reliability.</p>
      </div>
      <div className="missions">
        <div className="mission">
            <div>OUR MISSION</div>
            <p>Our solutions are extremely reliable and green flywheel-based. They allow the smooth functioning of business processes regardless of any kind of power disruptions.</p>
        </div>
        <div className="mission">
            <div>
            OUR VISION
            </div>
        <p>We are always happy to serve our customers and we always get good reply from them. We provide excellent service to the customers. Our batteries have high resistance to corrosion and have long battery life. </p>
        </div>
        <div className="mission">
            <div>
            ACHIEVEMENTS
            </div>
            <p>As a leading online store of UPS, Car and Inverter battery, we are expanding our operation to even small cities. With our outstanding expertise and the flexible work culture drives us to be a centre of demand among in the customer’s community.</p>
        </div>
      </div>
      <div className="comp-logos">
        <h2>We Provaided Companies</h2>
        <div className='logo-scroll'>

        <div className='img-btns'> 
            
            <button  onClick={LeftBtn} type='button'>&lt;</button>
            </div>
        <div className="comp-imgs" ref={ref}>
            <img src="http://inverterhouse.com/wp-content/uploads/2018/11/cli2.jpg" alt="" />
            <img src="http://inverterhouse.com/wp-content/uploads/2018/11/cli-6.jpg" alt="" />
            <img src="http://inverterhouse.com/wp-content/uploads/2018/11/cli-5.jpg" alt="" />
            <img src="http://inverterhouse.com/wp-content/uploads/2018/11/cli-3.jpg" alt="" />
            <img src="http://inverterhouse.com/wp-content/uploads/2018/11/cli-1.jpg" alt="" />
           
           
        </div>
        <div className='img-btns'> 
            
            <button className='b1' onClick={RightBtn} type='button'>&gt;</button>
            </div>
      </div>
        </div>
      <div style={{marginTop:"50px"}}>

      <Footer/>
      </div>
    </div>
  )
}

export default About
