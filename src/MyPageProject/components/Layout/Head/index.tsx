// import { useState } from 'react';

import { ColorChangeBox, ColorChangeButton, Header, Title } from './styled';

// import { ReactComponent as Star } from 'src/assets/svg/Star.svg';
// // import ColorButton from '../../Items/ColorButton';

// type HeadProps = {
//   isActive: boolean;
// };

export default function Head() {
  // const onStar = () => isActive;
  return (
    <Header>
      <Title> Chloe Choi </Title>
      {/* {isActive ? <Star style={{ color: 'red' }} /> : <Star style={{ color: 'trasnparent' }} />} */}
      <ColorChangeBox>
        <ColorChangeButton style={{ backgroundColor: 'red' }} />
        <ColorChangeButton style={{ backgroundColor: 'orange' }} />
        <ColorChangeButton style={{ backgroundColor: 'yellow' }} />
        <ColorChangeButton style={{ backgroundColor: 'green' }} />
        <ColorChangeButton style={{ backgroundColor: 'blue' }} />
        <ColorChangeButton style={{ backgroundColor: 'indigo' }} />
        <ColorChangeButton style={{ backgroundColor: 'purple' }} />
        <ColorChangeButton style={{ backgroundColor: 'pink' }} />
      </ColorChangeBox>
    </Header>
  );
}
// The flex-wrap: nowrap property prevents align-content from having an effect.
// Try setting flex-wrap to something other than nowrap
