import React from 'react'
import styled from 'styled-components'
const Container =styled.div`
/* border:2px solid green; */
flex:1;
margin:3px;
height:70vh;
position: relative;

`;

const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`;

const Info = styled.div`
${'' /* border:2px solid red; */}
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
position: absolute;
top:0;
${'' /* bottom:0; */}
left:0;
width:100%;
height:100%;


`;

const Title = styled.h1`
color:greenyellow;
margin-bottom: 20px;
`;

const Button = styled.button`
border:none;
padding:10px;
font-size:16px;
word-spacing:3px;
font-weight:500;
cursor:pointer;
color:navy;
${'' /* border-radius:12px; */}
${'' /* background-color:transparent; */}
:hover{
    background-color:gold;
    font-size:18px;
    color:purple;
    font-weight:700
}

`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem;