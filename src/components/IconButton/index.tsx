import styles from './index.module.scss';

type IconButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
export default function IconButton({ children, onClick }: IconButtonProps) {
  return (
    <button type="button" className={styles.iconButton} onClick={onClick}>
      {children}
    </button>
  );
}
