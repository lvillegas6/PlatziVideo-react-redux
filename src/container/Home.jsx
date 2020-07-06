import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = () => {
  const myList = useSelector(state => state.videos.myList);
  const trends = useSelector(state => state.videos.trends);
  const originals = useSelector(state => state.videos.originals);
  const search = useSelector(state => state.videos.search);
  return (
    <>
      <Header />
      <Search isHome />
      <Categories title='Mi lista'>
        <Carousel>
          {myList?.length > 0 && myList.map(item => (
            <CarouselItem
              key={item.id}
              {...item}
              isList
            />
          ))}
        </Carousel>
      </Categories>
      {
        search.length > 0 ? (
          <Categories title='Busqueda'>
            <Carousel>
              {search.length > 0 && search.map(item => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categories>
        ) : (
          <>
            <Categories title='Tendencias'>
              <Carousel>
                {trends?.length > 0 && trends.map(item => <CarouselItem key={item.id} {...item} />)}
              </Carousel>
            </Categories>
            <Categories title='Originales de platzi Video'>
              <Carousel>
                {originals?.length > 0 && originals.map(item => <CarouselItem key={item.id} {...item} />)}
              </Carousel>
            </Categories>
          </>
        )
      }
    </>
  );
};

export default Home;
//export default connect(props, actions)(Home);
