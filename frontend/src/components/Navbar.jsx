import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge} from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
    height:60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;
`;

const Left = styled.div`
align-items:center;
display:flex;
    flex: 1;
`;

const Language = styled.span`
font-size: 14px;
cursor:pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display:flex;
margin-left:25px;
padding:5px;
align-items:center;
`;

const Input = styled.input`
outline:none;
border:none;
`

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`;

const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
margin-left: 25px;
font-size: 14px;
cursor: pointer;
`

const Navbar = () => {

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>English</Language>
                    <SearchContainer><Input/>
                        <SearchIcon style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Vogue.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                    <ShoppingCartOutlined color="action" />
                    </Badge>
                    </MenuItem>
                </Right>

            </Wrapper>

        </Container>


    )
}

export default Navbar