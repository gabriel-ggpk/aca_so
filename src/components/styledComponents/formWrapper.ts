import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * {
    margin-bottom: 40px;
  }
  & > *:last-child {
    margin-bottom: 0px;
  }
  @media (max-width: 1200px) {
    & > * {
      margin-bottom: 35px;
    }
    & > *:last-child {
      margin-bottom: 20px;
    }
  } 
`;

export default FormWrapper;
