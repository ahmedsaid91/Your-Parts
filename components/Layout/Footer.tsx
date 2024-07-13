import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-indigo-600  ">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
            <span className="text-blueGray-500 hover:text-blueGray-800">   Your Parts   </span>
                Copyright © <span id="get-current-year">{new Date().getFullYear()}</span>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
