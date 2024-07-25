import styled from "styled-components";
export const AboutWrap = styled.div`
  .info {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  p {
    color: var(--gray-50);
  }
  .textareaHolder{
    min-height: 300px;
    @media (min-width: 1440px){
        min-height: 400px;
    }
  }
  button{
    display: block;
    margin-left: auto;
  }
`;
