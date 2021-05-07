import { useState, createContext } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <BlogContext.Provider
      value={[isActive, setIsActive]}>
      {children}
    </BlogContext.Provider> 
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
}
