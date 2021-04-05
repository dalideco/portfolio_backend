import React, { useState ,useRef, useEffect} from 'react'
import myImg from './images/myImg.jpg'

function Header(props) {

    

    const [current,setCurrent] = useState(0);
    const liArray = [useRef(),useRef(),useRef()];
    const [about, projects, contact] = liArray


    useEffect(()=>{
      liArray.forEach(li=>{
        li.current.classList.remove('current');
      })
      liArray[current].current.classList.add('current');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[current])
    const change = (i)=>{
      props.change(i)
      setCurrent(i)
    }
    


    

    return (
        <div className="header">
          <img src={myImg} alt="this is me."/>
          <ul className="navigation">
            <li onClick={()=>{change(0)}} ref={about}>about me</li>
            <li onClick={()=>{change(1)}} ref={projects}>projects</li>
            <li onClick={()=>{change(2)}}  ref={contact}>Contact me</li>
          </ul>
        </div>
    )
}

export default Header;
