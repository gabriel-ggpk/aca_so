import styled from 'styled-components';
import { ButtonLabelProps, ButtonProps } from './interfaces';

export const StyledButton = styled.div<ButtonProps>`
    background-color: ${(props) => props.backgroundColor || 'white'};
    color: ${(props) => props.color || 'white'};
    width: ${(props) => props.width || '200px'};
    font-weight: ${(props) => props.fontWeigth || 'normal'};
    font-family: ${(props) => props.font || 'Raleway'};
    font-size: 16px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 17px 0px;
  `;
export const ButtonLabel = styled.span<ButtonLabelProps>`
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
    font-weight: 400;
    color: ${(props) => props.labelColor || 'white'};
  `;
export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
