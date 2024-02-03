import { Typography } from '@mui/material';

import { ProfileContainer, ProfileNickname, ProfileText } from './styled';

export default function Profile() {
  return (
    <ProfileContainer>
      <ProfileNickname>
        <Typography variant="h4"> Chole Choi </Typography>
      </ProfileNickname>
      <ProfileText>
        <Typography> Front-end software developer. </Typography>
      </ProfileText>
    </ProfileContainer>
  );
}
