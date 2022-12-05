import { useState } from 'react';

export default function useInput() {
  const [userName, setValue] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return { userName, onChange };
}
