import React from 'react';
import Banner from '../Component/Banner/Banner';
import SubBanner from '../Component/SubBanner/SubBanner';
import OurBlog from '../Component/OurBlog/OurBlog';
import CardList from '../Component/Reusable/CardList';

const Home = () => {
  return (
    <div>
      <Banner />
      <SubBanner />
      <CardList />
      <OurBlog />
    </div>
  );
};

export default Home;
