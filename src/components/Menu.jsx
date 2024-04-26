import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import logo from '../components/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const Container = styled.div`
flex: 1;
height: 100vh;
background-color: ${({theme})=>theme.bglighter};
color: ${({theme})=>theme.text};
position: sticky;
top: 0;

`


const Wrapper = styled.div`
    padding: 18px 20px;

`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding-bottom: 50px;
    cursor: pointer;
`

   const Img = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
   `

   const Items = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 10px;
    cursor: pointer;
   `




const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
        <Logo>
        <Img src = {logo} />WD CLUSTER
        </Logo>
        <Link to="/" style={{textDecoration:"none"}}>
        <Items>
            <HomeIcon/>
            Home
        </Items>
        </Link>
        <Items>
            <ExploreIcon/>
            Explore
        </Items>
        <Items>
            <HomeIcon/>
            Home
        </Items>
        <Items>
            <HomeIcon/>
            Home
        </Items>
        <Items>
            <HomeIcon/>
            Home
        </Items>
        <Items>
            <HomeIcon/>
            Home
        </Items>
        <Items>
            <HomeIcon/>
            Home
        </Items>
        <Items>
            <HomeIcon/>
            Home
        </Items>
        <Items onClick={()=>setDarkMode(!darkMode)}>
            <LightModeIcon/>
            Light Mode
        </Items>
        </Wrapper>
    </Container>
  )
}

Menu.propTypes = {}

export default Menu