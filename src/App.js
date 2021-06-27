import React from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import items from './assets/items'
import LightMode from './components/LightMode';
import Toggle from './components/Toggle';
import { GlobalStyles, lightTheme, darkTheme } from './components/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import './css/skeleton.css'
import './css/normalize.css'

function App() {
    const [ theme, toggleTheme ] = LightMode();
    const themeMode = theme === 'dark' ? darkTheme : lightTheme;
    return (
        <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                <Header></Header>
                <div className = "container row">
                    {
                        items.map((item, i) => {
                            return(
                                <Card
                                i={i}
                                title={item.title}
                                subtitle={item.subtitle}
                                link={item.link}
                                cover={item.image}>
                                </Card>
                            )
                        })
                    }
                </div>
                <Footer></Footer>
        </ThemeProvider>
    );
}

export default App;