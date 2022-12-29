import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import Button from '@/components/elements/button';
import Picture from '@/assets/profile-picture.png';
import Badge from '@/assets/badge.png';
import ProfileBackground from '@/assets/profile-background.png';
import Stars from '@/assets/stars.png';
import useAuth from '@/core/hooks/useAuth';
import LocalService from '@/core/service/locals';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
dayjs.extend(duration);
dayjs.extend(relativeTime);

const PageWrapper = styled.div`
  background-color: #0f0f0f;
  background-image: url(${Stars});
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
 `;

const ContentWrapper = styled.div`
  background-color: #000004;
  width: 1200px;
  display: flex;
  border-radius: 20px;
  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    flex-flow: column-reverse;
  }
 `;
const InfoWrapper = styled.div`
  color: white;
  width: 302px;
  margin-top: 168px;
  margin-left:90px;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    z-index: 1;
  }
  `;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 258px;
  height: 162px;
  font-style: italic;
  font-size: 69px;
  justify-content: space-between;
  margin-bottom: 12px;
  font-weight: 300;
  @media (max-width: 1200px) {
    text-align: center;
    font-size: 51px;
    height: 120px;
    z-index: 1;
  }
  `;
const Status = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 45px;
  `;
const ProfileWrapper = styled.div`
background-color: black;
width: 709px;
height: 695px;
margin: auto 40px auto auto ;
position: relative;
@media (max-width: 1200px) {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
}
`;
const ProfilePictureBackground = styled.img`
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
  }
`;
const ProfilePicture = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-42.5%,-45%);
  border: 15px solid #ffffff;
  border-radius: 50%;
  background-color: #ffffff;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    transform: scale(0.4,0.4) translate(-118%,-120%);
    border: 37.5px solid #ffffff;
  }
`;
const ProfileBadge = styled.img`
  position: absolute;
  top: 62%;
  left: 62.5%;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    transform: scale(0.1,0.1) translate(-420%,-435%);

  }
  `;
const FirstName = styled.span`
  font-weight: 700;
  `;
export default function Home(): JSX.Element {
  const [user, loading] = useAuth();
  const navigate = useNavigate();
  const time = dayjs.duration(dayjs().diff(dayjs(user.created_at))).humanize();

  return (

    <PageWrapper>
      {loading ? <div>Carregando...</div> : (
        <ContentWrapper>
          <InfoWrapper>
            <NameWrapper>
              <FirstName>{user.first_name}</FirstName>
              {user.last_name}
            </NameWrapper>
            <Status>
              Ativo há pelo menos
              <strong>
                {' '}
                {time}
              </strong>
            </Status>
            <Button
              width=""
              onClick={() => {
                LocalService.removeUser();
                navigate('/');
              }}
              color="black"
              font="Montserrat"
              fontWeigth="500"
            >
              Sair de aca.so
            </Button>
          </InfoWrapper>
          <ProfileWrapper>
            <ProfilePictureBackground src={ProfileBackground} alt="Profile" />
            <ProfilePicture src={/* user.profile_picture */ Picture} referrerPolicy="no-referrer" />
            <ProfileBadge src={Badge} />
          </ProfileWrapper>
        </ContentWrapper>
      )}

    </PageWrapper>

  );
}
