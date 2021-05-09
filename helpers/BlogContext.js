import { useState, createContext } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <BlogContext.Provider
      value={{
        isActiveKey: [isActive, setIsActive]
        }}>
      {children}
    </BlogContext.Provider> 
  );
};
