import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

export default () => {
  const video = useInitialState(API);
  console.log(video);
  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories title='Mi lista'>
        <Carousel>
          {video.mylist?.length > 0 && video.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Tendencias'>
        <Carousel>
          {video.trends?.length > 0 && video.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de platzi Video'>
        <Carousel>
          {video.originals?.length > 0 && video.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
