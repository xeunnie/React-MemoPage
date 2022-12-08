import { useNavigate } from 'react-router-dom';

import ItemButton from './ItemButton';
import { DrawerContainer, DrawerListContainer, ItemContainer } from './styled';

export default function Drawer() {
  const navigate = useNavigate();
  return (
    <DrawerContainer>
      <DrawerListContainer>
        <ItemContainer>
          <ItemButton onClick={() => navigate('/')}>TODO List</ItemButton>
          <ItemButton onClick={() => navigate('/memo')}>MEMO</ItemButton>
          <ItemButton onClick={() => navigate('photodashboard')}>Photo Dashboard</ItemButton>
        </ItemContainer>
      </DrawerListContainer>
    </DrawerContainer>
  );
}
