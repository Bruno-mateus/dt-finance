import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --red:#E52E4D;
  --blue:#5429CC;
  --blue-light:#6933FF;
  --text-title:#363F5F;
  --text-body:#969CB3;
  --background:#f0f2f5;
  --shape:#ffffff;
  --green:#33CC95;
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html{ 
  font-size: 62.5%;
}
body{
  font-size: 1.6rem;
  background-color: var(----background);
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing:antialiased;
  button{
    cursor: pointer;
  }

body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong{
  font-weight: 600;
}
  [disabled]{
    opacity: 0.6;
    cursor:not-allowed;
  }
}

.react-modal-overlay{
  background:rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:center;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.react-modal-content{
  background-color:var(--background);
  
  width: 100%;
  max-width:57.6rem;
  padding: 6rem;
  position: relative;
  border-radius:0.5rem;
}


`