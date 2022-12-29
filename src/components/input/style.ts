import styled from 'styled-components';
import { Props } from './interfaces';

export const StyledInput = styled.input<Props>`
  border: none;
  background-color: #1E1F2F;
  height: 50px;
  width: ${(props) => props.width || '200px'};
  border-radius: 5px;
  color: white;
  padding-left: 16px;
  font-size: 12px;
  font-weight: 400;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  border: ${(props) => (props.error ? '3px solid #E93F78' : 'none')};
  @media (max-width: 1200px) {
    width: 100%;
    
  }
  `;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 500px;
  @media (max-width: 1200px) {
    width: 100%;
    box-sizing: border-box;
    padding-left: 45px;
    padding-right: 45px;

  }
  `;
export const Label = styled.span`
  font-size: 16px;
  line-height: 110%;
  margin-bottom: 8px;
  margin-left: 10px;
  `;
export const PasswordIconWrapper = styled.img`
  position: absolute;
  right: 16px;
  top: 45px;
  @media (max-width: 1200px) {
    display: none;
  }
  `;
export const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #E93F78;
  margin-top: 8px;
  margin-left: 20px;
  `;
