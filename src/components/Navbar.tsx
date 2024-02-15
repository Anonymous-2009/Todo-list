import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between bg-purple-600 py-2">
        <div className="logo">
        <span className="font-bold text-xl mx-8"> 
        iTask 
        </span>
        </div>
      <ul className="flex gap-8 mx-8"> 
      <li className="hover:font-bold
hover:text-xl transition-all duration-50"> home </li>
      <li className="hover:font-bold hover:text-xl transition-all duration-500"> todo </li>
      </ul>
      </nav>
    </>
  );
};

export default Navbar;
