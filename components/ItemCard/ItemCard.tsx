import React from 'react';
import { useRouter } from 'next/router';
import { deletePost } from '../../utils/api';

interface Item {
  id: number;
  title: string;
  body: string;
}

interface ItemCardProps {
  item: Item;
  img:string;
}


const ItemCard: React.FC<ItemCardProps> = ({ item, img }) => {

  const router = useRouter();

  const navigateToDynamicRoute = (postId: number) => {
    router.push({
      pathname: '/posts/[postId]',
      query: { postId },
    });  };
  async function deletePostFunction() {
    try {
      const deleteItem = await deletePost(item.id);
      console.log(deleteItem)
    } catch (error) {
      console.error('Error fetching imgs:', error);
    }
   
  }
  return (
    <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-24 max-w-md md:max-w-2xl">
      <div className="flex items-start px-4 py-6">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src={img}
          alt="avatar"
        />
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 -mt-1">{item.title}</h2>
            <small className="text-sm text-gray-700">22h ago</small>
          </div>
          <p className="text-gray-700">{item.body}</p>
          <p className="mt-3 text-gray-700 text-sm">
            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
          </p>
          <div className="mt-4 flex items-center">
     
            <div className="flex text-gray-700 text-sm mr-4">
              <button
              onClick={() => deletePostFunction()}
                className="middle none center mr-5 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Delete
              </button>
              <button
              onClick={() => navigateToDynamicRoute(item.id)}
                className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
