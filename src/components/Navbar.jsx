import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color:${({theme})=>theme.bglighter};
    height: 56px;
`

const Wrapper = styled.div`
    height: 100%;
    padding:0px 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;

`
const Search = styled.div`
width: 40%;
position: absolute;
left: 0px;
right: 0px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
`
const Input = styled.input`
border:none;
background-color: transparent;
width: 100%;
height: 100%;
border-radius: 1px solid white;
`

const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
border-radius: 3px;
font-weight: 500;
color: #3ea6ff;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`

const Navbar = props => {
  return (
    <Container>
     <Wrapper>
        <Search>
            <Input placeholder='Search'/>
            <SearchIcon/>
        </Search>
        <Link to="signin" style={{textDecoration:"none"}}>
        <Button>
        <AccountCircleIcon/>
        SIGN IN
        </Button>
        </Link>
        
     </Wrapper>
    </Container>
  )
}

Navbar.propTypes = {}

export default Navbar