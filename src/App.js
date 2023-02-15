import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import GlobalStyle from "./globalStyles";

import Main from "./views/main/Main";
import About from "./views/about/About";
import Blog from "./views/blog/Blog";
import Skills from "./views/skills/Skills";
import Repository from "./views/repository/Repository";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/repository' element={<Repository />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
