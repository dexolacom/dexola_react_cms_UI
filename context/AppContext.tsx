'use client';
import React, { createContext, useState, useContext } from 'react';

interface IContext {
  isFormOpen: boolean;
  setData: React.Dispatch<React.SetStateAction<boolean>>;
  isHoveredLink: boolean;
  setIsHoveredLink: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = createContext<IContext | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isFormOpen, setData] = useState<boolean>(false);
  const [isHoveredLink, setIsHoveredLink] = useState<boolean>(false);

  return (
    <MyContext.Provider
      value={{ isFormOpen, isHoveredLink, setData, setIsHoveredLink }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): IContext => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};
