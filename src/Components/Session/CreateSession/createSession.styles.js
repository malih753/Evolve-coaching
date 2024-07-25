import styled from "styled-components";
export const CreateWrapper = styled.div`
  .createHolder {
    margin-bottom: 20px;
    display: block;
    @media (min-width: 1200px) {
      display: flex;
      align-items: start;
      gap: 20px;
    }
  }
  .createSession {
    .title {
      font-size: 18px;
      line-height: 22px;
      @media (min-width: 992px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
    .subTtile {
      display: block;
      color: var(--gray-30);
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 20px;
      @media (min-width: 992px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
  .inputHolder {
    input {
      color: var(--black);
      &::placeholder {
        color: var(--black);
      }
    }
  }
  .heading {
    display: block;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 20px;
    @media (min-width: 992px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    @media (min-width: 992px) {
      flex-direction: row;
    }
    .btnFlex {
      display: flex;
      gap: 20px;
      strong {
        display: flex;
        border: 1px solid var(--gray-30);
        padding: 5px;
        gap: 10px;
        align-items: center;
        width: 208px;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 20px;
        @media (min-width: 992px) {
          font-size: 20px;
          line-height: 24px;
        }
        img {
          width: 16px;
          height: 16px;
        }
        input {
          width: 170px;
          background: transparent;
          border: none;
        }
        .react-time-picker__wrapper{
          border: none;
        }
        .react-time-picker__clear-button{
          display: none;
        }
      }
    }
  }
  .uploadPlaceholder {
    margin-bottom: 20px;
    img {
      width: 100%;
      max-width: 448px;
      border: 1px solid var(--gray-30);
      height: 244px;
      /* display: flex;
      justify-content: center;
      align-items: center; */
    }
  }
  
    .flexWrap {
      display: block;

      @media (min-width: 768px) {
        display: flex;
        gap: 50px;
      }
      .drop1 {
        flex-shrink: 0;
        width: 300px;
      }
      .drop2 {
        flex-grow: 1;
      }
    }
  
  .addTopic{
    padding-bottom: 20px;
  }
 
`;
