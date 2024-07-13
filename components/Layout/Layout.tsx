import React, { ReactNode } from 'react';
import  AddPost  from '../AddPost/AddPost';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
 
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex gap-4 justify-center">
   <AddPost/>
       </div>
     
      <main>{children}</main>
    </div>
  );
};

export default Layout;
