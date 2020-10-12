import { NextPage, GetStaticProps } from 'next';

interface Props {
  content: { attributes: HomeAttributes };
}
interface HomeAttributes {
  hero_title: string;
  hero_description: string;
}
const HomePage: NextPage<Props> = ({ content }) => {
  const { attributes } = content;
  return (
    <>
      <h1>{attributes.hero_title}</h1>
      <p>{attributes.hero_description}</p>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);
  return { props: { content: content.default } };
};
export default HomePage;
