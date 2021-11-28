import styled from 'styled-components'

export const Containter = styled.div`
  margin-top:-6.2rem;
  display:flex;
  gap:3.2rem;
`


export const Content=styled.div`
  padding:2.5rem 3rem;
  background-color:var(--shape);
  width:35.2rem;
  border-radius:.5rem;
  strong{
    font-size:3.6rem;
    font-weight:500;
    display: block;
    margin-top: 1.41;
  }
  header{
    display: flex;
    align-items:center;
    justify-content:space-between;
  }
  span{
    color:var(--text-body);
  }
  &.total{
    background-color:var(--green);
    color:var(--shape);
    span{
      color:var(--shape);
    }
  }

`