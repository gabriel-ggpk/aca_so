import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import Button from '@/components/button';
import Picture from '@/assets/profile-picture.png';
import Badge from '@/assets/badge.png';
import ProfileBackground from '@/assets/profile-background.png';
import useAuth from '@/core/hooks/useAuth';
import LocalService from '@/core/service/locals';
import 'dayjs/locale/pt-br';
import {
  PageWrapper,
  ContentWrapper,
  InfoWrapper,
  NameWrapper,
  FirstName, Status,
  ProfileWrapper,
  ProfilePictureBackground,
  ProfilePicture,
  ProfileBadge,
} from './style';

dayjs.locale('pt-br');
dayjs.extend(duration);
dayjs.extend(relativeTime);

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
