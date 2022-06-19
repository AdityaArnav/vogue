import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color:rgb(148, 225, 227);;
color:navy;
display:flex;
align-items:center;
justify-content:center;
font-Size:15px;
font-weight:500

`

const Annoncement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Annoncement