import React from "react";
import { Sun, Moon, ImageIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900 text-white p-6 rounded-2xl shadow-2xl mb-8">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="relative p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg">
            <div className="flex items-center justify-center w-10 h-10 text-3xl">
              rI
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              reduceImg
            </h1>
            <p className="text-sm opacity-90 font-medium">
              Privacy-first image compression
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
