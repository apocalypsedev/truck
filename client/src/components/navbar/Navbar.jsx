import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Diagram } from '../components';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // State for menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold">
          Truck Delivery
        </div>
        
        <div className="flex items-center gap-4">
          <select
                id="languageSelect"
                className="bg-transparent text-white border-[2px] border-[aqua] p-2 text-sm rounded-md cursor-pointer hover:bg-[aqua] hover:text-black  font-mono font-semibold "
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">
                  English
                </option>
                <option value="uz">
                O'zbekcha
                </option>
              </select>
              <a href="/login">
                <button
                  className="text-white border-[2px] border-[aqua] p-2 text-sm rounded-md cursor-pointer hover:bg-[aqua] hover:text-black  font-mono font-semibold"
                  >
                    {t('navbar.btn')}
                </button>
              </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
