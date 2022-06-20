import React from 'react'
import styled from 'styled-components'
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
const Container = styled.div`
border:2px solid black;
flex:1;
display:flex;
align-items: center;
justify-content: center;
margin: 5px;
min-width: 280px;
height:350px;
background-color: #f5fbfd;
/* background-color: blue; */
`;
const Circle = styled.div`
height:200px;
width: 200px;
border-radius:50%;

`;
const Image = styled.img`
height: 75%;
`;
const Info = styled.div`

`;

const Icon = styled.div`

`;
const Title = styled.h1`

`;
const Button = styled.button`

`;

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
        <Icon>
        <ShoppingCartOutlined/>
        </Icon>

        <Icon>
        <SearchOutlined/>
        </Icon>

        <Icon>
        <FavoriteBorderOutlined/>
        </Icon>

        </Info>
    </Container>
  )
}

export default Product