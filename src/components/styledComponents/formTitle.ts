import styled from 'styled-components';

const FormTitle = styled.h1`
  font-size: 50px;
  line-height: 150%;
  font-weight: 600;
  color: white;
  margin-bottom: 120px;
  white-space: pre-line;
  text-align: center;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const FormTitleSmall = styled.h1`
  display: none;
  font-size: 32px;
  line-height: 37px;
  font-weight: 700;
  margin-bottom: 69px;
  white-space: pre-line;
  text-align: center;
  @media (max-width: 1200px) {
    display: block !important;
  }
`;

export { FormTitle, FormTitleSmall };
