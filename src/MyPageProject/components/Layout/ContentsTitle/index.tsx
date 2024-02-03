import { Header, Title } from './styled';

type ContentsTitleProps = {
  title: string;
};

export default function ContentsTitle({ title }: ContentsTitleProps) {
  return (
    <Header>
      <Title> {title} </Title>
    </Header>
  );
}
