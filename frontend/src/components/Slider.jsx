import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRighttOutlined from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';

const Container = styled.div`
display:flex;
height:80vh;
width: 100%;
${'' /* background-color:rgb(228, 160, 183); */}
${'' /* background-color: rgb(225,159,147); */}
position: relative;
overflow: hidden;
`;

const Arrow = styled.div`
display: flex;
${'' /* border:1px solid; */}
align-items: center;
justify-content: center;
width:50px;
height:50px;
background-color: #fff7f7;
border-radius: 50%;
opacity: 0.6;
cursor:pointer;
position:absolute;
top:0;
bottom:0;
${'' /* left:10px; */}
${'' /* right:0; */}

left : ${props => props.direction === 'left' && "10px"};
right: ${props => props.direction === 'right' && '10px'};
margin:auto;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display:flex;
${'' /* border:2px solid red; */}
transform: translateX(${(props) =>props.slideIndex * -100}vw);
transition : all 1.5s ease;
`;


const Slide = styled.div`
${'' /* border:2px solid green; */}
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color: #${props => props.bg}
`;

const ImgContainer = styled.div`
flex: 1;
height:100%;
`;

const Image = styled.img`
height:75%;
width:400px;
`;


const InfoContainer = styled.div`
flex: 1;
padding:50px;
`;

const Title = styled.h1`
font-size : 63px;
${'' /* display:flex; */}
${'' /* align-items:center; */}
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 18px;
font-weight: 500;
letter-spacing: 2.7px;
`;
const Button = styled.button`
padding: 10px;
font-size:20px;
background-color:transparent;
${'' /* border-radius:3px; */}
cursor:pointer;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick= (direction)=>{
        if(direction==='left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 3)
        }
        else{
            setSlideIndex(slideIndex < 3 ? slideIndex+1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction='left' onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (

                <Slide bg={item.bg} key= {item.id}>

                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>

                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>

                </Slide>
                ))}
                {/* <Slide bg="fcf1ed">

                    <ImgContainer>
                        <Image src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
                    </ImgContainer>

                    <InfoContainer>
                        <Title>WINTER SALE!</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>

                </Slide>
                <Slide bg="fbf0f4">

                    <ImgContainer>
                        <Image src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
                    </ImgContainer>

                    <InfoContainer>
                        <Title>POPULAR SALE!</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>

                </Slide> */}
            
            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick("right")}>
                <ArrowRighttOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider