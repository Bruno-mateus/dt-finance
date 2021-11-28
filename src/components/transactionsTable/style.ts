import styled from 'styled-components'

export const Containter= styled.div`
  margin-top:6.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  max-width: 1200px;
  table{ 
    color:var(--text-body);
    width: 100%;
    text-align: left;
    border-spacing: 0 0.8rem;
    th{
      padding:2rem 3rem;
    }
    td{
      background-color:var(--shape);
      border:0;
      padding:2rem 3rem;
      border-radius: .25rem;
      &:first-child{
        color:var(--text-title);
      }
    }
    .deposit{
      color:var(--green);
    }
    .withdraw{
      color:var(--red);
    }
  }
`