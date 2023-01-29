import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TextContext } from '../../store/TextContext';
import Loading from '../Loading/Loading';
import { BulletIcon, MainSectionStyled } from './MainSection.styled';

interface MainSectionProps {
  selectedCategory: string;
}

const MainSection = ({ selectedCategory }: MainSectionProps) => {
  const { data, loading } = useContext(TextContext);

  const filteredItems = data?.filter((item) =>
    selectedCategory === 'all' ? data : item.tag.includes(selectedCategory)
  );

  if (loading) return <Loading />;

  return (
    <MainSectionStyled>
      <ul>
        {data &&
          filteredItems?.map((item) => (
            <li key={item.id}>
              <BulletIcon />
              <Link to={`/categories/text/${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </MainSectionStyled>
  );
};
export default MainSection;
