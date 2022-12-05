import styles from './index.module.scss';

type SubmitButtonProps = {
  mainText: string;
  onClick?: () => void;
  disabled?: boolean;
};
export default function SubmitButton({ mainText, onClick, disabled }: SubmitButtonProps) {
  return (
    <button type="button" className={styles.footerSummitButton} onClick={onClick} disabled={disabled}>
      {mainText}
    </button>
  );
}
