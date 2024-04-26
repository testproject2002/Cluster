import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu.jsx';
import Navbar from './components/Navbar.jsx';
import { darkTheme, lightTheme } from './utils/themes.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home.js';
import SignIn from './pages/Signin.js';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({theme})=>theme.text};
`;

const Wrapper = styled.div``;

const App = () => {

  const [darkMode,setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path='/'/>
                <Route index element ={<Home/>}/>
                <Route path='signin' element={<SignIn/>}/>
            </Routes>
          </Wrapper>
        </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
  }
export default App;
