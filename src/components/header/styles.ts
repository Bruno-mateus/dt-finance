import styled  from 'styled-components'

export const Containter = styled.header`
  height: 21.2rem;
  background: var(--blue);
  width: 100%;
  
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  padding: 3.2rem 1rem ;
  justify-content:space-between;
  button{
    padding:1.2rem 3.2rem;
    background: var(--blue-light);
    border: none;
    color:var(--shape);
    border-radius:.5rem;
    &:hover{
      filter:brightness(0.9)
    }
  }

`