import React from 'react';
import styled from 'styled-components'
//footer styles
const Footwrap = styled.div`
width:100%;
height:100px;
background:#2C3E50;
align-items:center;
text-align:center;
margin-top:60%;
 h3{
     padding:30px 10px 10px 10px;
     font-family:Fascinate Inline;
     font-size:1.5rem; 
     color:#fff;
 }
 a{
     color:#F4D03F;
     text-decoration:none;
     :hover{
         opacity:0.5;
     }
 }
`
function Footer(){
    return(
        <Footwrap>
            <h3>
            Designed and Created by <br/>
            <a href="https://github.com/jami-raza">Jami Raza</a>
            </h3>
        </Footwrap>
    )
}
export default Footer;