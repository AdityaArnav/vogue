// import React, { useState } from 'react'
// import styled from 'styled-components'
// import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';



// const Container = styled.div`
// border:2px solid blue;
// width:100vw;
// height:70vh;
// `;

// const Arrow = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// border-radius: 50%;
// background-color:red;
// height:50px;
// width:50px;
// opacity:0.7;
// position : absolute;

// ${'' /* top:0; */}
// ${'' /* bottom:0; */}
// margin:auto; 
// margin-top:32.6vh;
// left: ${props=>props.direction==="left" && "10px"};
// right: ${props=>props.direction=== "right" && "10px"}



// `;

// const Wrapper = styled.div`

// `;

// const SlidePrac = () => {
//     const [show , setShow] = useState(0);

//     const handleClick= (direction) =>{
//     if(direction=== "left"){
//         setShow()
//     }
//     }
//   return (
//     <Container>
//             <Arrow direction="left" onClick={()=>handleClick("left")}>
//                 <ArrowBackIosOutlinedIcon/>
//             </Arrow>
//             <Arrow direction = "right" onClick={()=>handleClick("right")}>
//                 <ArrowForwardIosOutlinedIcon/>
//             </Arrow>
//         <Wrapper>
//         </Wrapper>
//     </Container>
//   )
// }

// export default SlidePrac;