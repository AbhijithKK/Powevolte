import { useState } from 'react'
import './Header.css'
const Header = () => {
    const [refresh,userefesh]=useState<boolean>(false)
    const ShowNav=()=>{
        userefesh(!refresh)
    }
  return (
    <div>
      <div className="bodyy">
        <div className="inner-body">
            <div className="logo">POWER VOLTE</div>
            <div className={refresh ?"list-items1":"list-items"}>
                <button type='button' className={refresh ? 'toggle-btn1':'toggle-btn'} onClick={ShowNav}>logo</button>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Our Services</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
