import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body, .Header, .Card {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};       
        transition: all .5s linear;
    }
`;

export const lightTheme = {
    body: '#fff',
    text: '#000',
};

export const darkTheme = {
    body: '#000',
    text: '#fff',
};