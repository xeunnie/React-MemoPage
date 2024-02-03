import { AddButtonItem } from './styled';

type AddButtonProps = {
  click: string;
  onClickAdd: () => void;
};

export default function AddButton({ click, onClickAdd }: AddButtonProps) {
  return (
    <AddButtonItem type="button" onClick={onClickAdd}>
      {click}
    </AddButtonItem>
  );
}
