import React, { useState } from 'react'
import {useTransition,animated} from 'react-spring'
import About from './Components/About'
import Projects from './Components/Projects';
import Contact from './Components/Contact'

export default function Main(props) {

    const [myInput , setMyInput]= useState({
        name: '',
        email:'',
        description:''
    })

    let display;
    switch(props.page){
        case 0:{
            display = (<About/>);
            break;
        }
        case 1:{
            display = (<Projects/>);
            break;
        }
        case 2:{
            display = (<Contact myInput={myInput} setMyInput={setMyInput}/>);
            break;
        }
        default : display= (<p>No data found</p>)
    }

    const transition = useTransition(props.page,{
        from:{transform:'scale(1.1)' ,opacity:0},
        enter:{transform:'scale(1)' ,opacity:1},
        leave:{transform:'scale(0.9)' ,opacity:0}
    })

    return (
        <div className="main">
            {transition((style, item)=>{
                return (
                    <animated.div style={style}>
                        {display}
                    </animated.div>
                )
            })}
            
            
        </div>
    )
}
