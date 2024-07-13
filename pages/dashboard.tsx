import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import ItemCard from '../components/ItemCard/ItemCard';
import Nav from '../components/Layout/Nav';
import Footer from '../components/Layout/Footer';
import { fetchItems, fetchImg } from '../utils/api';
import { useAuthGuard } from '../utils/hooks/useAuthGuard';

interface Item {
  id: number;
  title: string;
  body: string;
}

interface Imgs {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [imgs, setImgs] = useState<Imgs[]>([]);
  useAuthGuard()

  useEffect(() => {
    async function fetchData() {
      try {
        const imgResponse = await fetchImg();
        setImgs(imgResponse);
      } catch (error) {
        console.error('Error fetching imgs:', error);
      }
      try {
        const itemsResponse = await fetchItems();
        setItems(itemsResponse);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }

      fetchData();
  }, []); 


  return (

    <div className='min-h-full'>
      <Nav/>
        <Layout>
          <div>
            {items.map((item, i) => (
              <ItemCard key={item.id} item={item} img={imgs[i].url} />
            ))}
          </div>
        </Layout>
     <Footer/>
    </div>
  );
};

export default Home;
