import React from 'react';
import styled from 'styled-components';
import Picture from '@/assets/profile-picture.png';
import Button from '@/components/elements/button';
import Stars from '@/assets/stars.svg';
import PictureBackground from '@/assets/profile-picture-background.svg';

const PageWrapper = styled.div`
  display: inline-block;
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  background-color: #0f0f0f;
  background-image: url(${Stars});
  white-space: pre-line;
`;
const InfoWrapper = styled.div`
  text-align: left;
  color: #ffffff;
  width: 50%;
  margin-left: 90px;  
  margin-top: 170px;

  `;
const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-image: url(${PictureBackground});
  background-size: cover;
  background-position: top -2.4rem right 1.2rem;
  background-repeat: no-repeat;
  margin: 66px 40px 66px 0;
  & img {
    background-color: #ffffff;
    border-radius: 50%;
    border : 15px solid #ffffff;

  }
`;
const PlaceholderWrapper = styled.div`
  display: flex;
  position:absolute;
  height:auto;
  bottom:0;
  top:0;
  left:0;
  right:0;
  margin: 50px 120px;
  background-color: #000004;
  border-radius: 20px;
  `;
const UserName = styled.p`
  font-size: 69px;
  font-weight: 400;
  font-style: italic;
  line-height: 80px;
  margin: 0;
  `;
const UserStatus = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  line-height: 23px;
  margin-bottom: 45px;
  `;
export default function Home(): JSX.Element {
  return (
    <PageWrapper>
      <PlaceholderWrapper>
        <InfoWrapper>
          <UserName><strong>JOÃO</strong></UserName>
          <UserName>CARLOS</UserName>
          <UserStatus>
            Ativo há pelo menos
            <strong> 42 minutos</strong>
          </UserStatus>

          <Button width="" labelColor="black" fontWeigth="500" font="Montserrat" onClick={() => {}}>
            Sair de aca.so
          </Button>
        </InfoWrapper>
        <ProfileWrapper>
          <img src={Picture} alt="Profile" />
        </ProfileWrapper>
      </PlaceholderWrapper>
    </PageWrapper>

  );
}
