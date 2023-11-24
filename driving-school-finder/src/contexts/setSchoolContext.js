import { useState, createContext, useContext } from 'react';

const SetSchoolContext = createContext();

export const SetSchoolProvider = ({ children }) => {

  const [school, setSchool] = useState({});

  const setSchoolDescription =
    async ({ name, description, logoUrl, whyUs, regionsServed, categoriesServed }) => {

      setSchool(data => {
        return {
          ...data,
          name,
          description,
          logoUrl: logoUrl[0],
          whyUs: [...whyUs],
          regionsServed: [...regionsServed],
          categoriesServed: [...categoriesServed],
        };
      });
    };

  const contextValues = {
    setSchoolDescription,
    school,
  };

  return (
    <SetSchoolContext.Provider value={contextValues}>
      {children}
    </SetSchoolContext.Provider>
  );
};

export const useSetSchoolContext = () => {
  return useContext(SetSchoolContext);
};