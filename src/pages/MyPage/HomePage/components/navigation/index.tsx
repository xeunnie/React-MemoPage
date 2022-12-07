import { useNavigate } from 'react-router-dom';
import type { DrawerProps as BaseDrawerProps } from '@mui/material';

// import { Typography } from '@mui/material';
// import { THEME_TYPE } from '~/constants/theme';
// import Button from '~/Popup/components/common/Button';
// import Divider from '~/Popup/components/common/Divider';
// import IconButton from '~/Popup/components/common/IconButton';
// import Switch from '~/Popup/components/common/Switch';
// import { useChromeStorage } from '~/Popup/hooks/useChromeStorage';
// import { useCurrentPassword } from '~/Popup/hooks/useCurrent/useCurrentPassword';
// import { useNavigate } from '~/Popup/hooks/useNavigate';
// import { useTranslation } from '~/Popup/hooks/useTranslation';
import ItemButton from './ItemButton';
import { ItemContainer, NavigationContainer, NavigationListContainer, UpContainer } from './styled';

type DrawerProps = Omit<BaseDrawerProps, 'children'>;
export default function Navigation({ onClose, ...remainder }: DrawerProps) {
  const navigate = useNavigate;
  return (
    <NavigationContainer {...remainder} onClose={onClose}>
      <NavigationListContainer>
        <UpContainer>
          <ItemContainer>
            <ItemButton onClick={() => navigate()}>TODO List</ItemButton>
            <ItemButton onClick={() => navigate()}>MEMO</ItemButton>
            <ItemButton onClick={() => navigate()}>Photo Dashboard</ItemButton>
          </ItemContainer>
        </UpContainer>
      </NavigationListContainer>
    </NavigationContainer>
  );
}
