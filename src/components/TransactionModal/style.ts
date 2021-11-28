import styled from 'styled-components'
import { darken, transparentize } from 'polished'



export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  h2{ 
    font-size:2.4rem;
    font-weight: 600;
  }
  >input,button{
    width: 48rem;
    border:none;
    border-radius:.5rem;
  }
  >input{
    padding:2rem 2.4rem;
    color:var(--text-body);
    background:#E7E9EE ;
    border:1px solid #D7D7D7;
  }
  >button{
    text-align:center;
    padding:2rem;
    background-color:var(--green);
    color:var(--shape);
    
  }

`

export const TransactionTypeContainer = styled.div`
   display: grid; 
    gap:.8rem;
    grid-template-columns: 1fr 1fr;

`



interface RadioBoxProps{
  isActive: boolean;
  activeColor:'red'|'green';
}


const colors = {
  red:'#E52E4D',
 green:'#33CC95'
}

export const RadioBox = styled.button<RadioBoxProps>`
    width: 23.6rem !important;
    display: flex;
    gap:1.8rem;
    padding:2.2rem;
    justify-content: center;
    background: ${props=> props.isActive?
      transparentize(0.9, colors[props.activeColor])
    :'transparent'
    };
    color:var(--text-title);
    border:1px solid #E7E9EE !important;
    align-items: center;
    transition:border 200ms;
    &:hover{
      border:1px solid ${darken(0.1,'#E7E9EE')} !important;
    }
    img{
      width:20px;
      height:20px;
    }
`