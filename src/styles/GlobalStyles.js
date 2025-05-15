import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    line-height: 1.5;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 16px;
    font-weight: 400;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primaryDark};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  ul, ol {
    list-style-position: inside;
    margin-bottom: 16px;
  }

  section {
    padding: 80px 0;
    
    @media (max-width: 768px) {
      padding: 60px 0;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-title {
    text-align: center;
    margin-bottom: 48px;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      width: 64px;
      height: 4px;
      background: ${({ theme }) => theme.primary};
      border-radius: 2px;
    }
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;