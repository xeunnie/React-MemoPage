import { useEffect, useRef, useState } from 'react';

import useInput from 'src/hooks/useInput';

export default function useDialog() {
  const [isDialog, setDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const userInput = useInput();

  const onClose = () => {
    setDialogOpen(false);
  };
  const onOpen = () => {
    setDialogOpen(true);
  };
  const onTest = (callback: () => void) => {
    callback();
  };
  useEffect(() => {
    const handler = (event: MouseEvent): void => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setDialogOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [userInput.userName]);

  return { isDialog, dialogRef, onClose, onOpen, onTest };
}
