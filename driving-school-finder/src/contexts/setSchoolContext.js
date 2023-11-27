import { useState, createContext, useContext } from 'react';

const SetSchoolContext = createContext();

export const SetSchoolProvider = ({ children }) => {

  const [school, setSchool] = useState();

  const setSchoolDescription =
    async ({ name, description, logoUrl, whyUs1, whyUs2, whyUs3, regionsServed, categoriesServed }) => {
      setSchool(data => {
        return {
          ...data,
          name,
          description,
          logoUrl,
          whyUs: [whyUs1, whyUs2, whyUs3],
          regionsServed: [...regionsServed],
          categoriesServed: [...categoriesServed],
        };
      });
    };

  const setSchoolContacts = async ({ city, region, street, email, phone }) => {
    setSchool(data => {
      return {
        ...data,
        city,
        region,
        street,
        email,
        phone,
      };
    });
  };

  const setSchoolImages = async ({ mainImage, supportImages }) => {
    setSchool(data => {
      return {
        ...data,
        mainImage,
        supportImages,
      };
    });
  };

  const setSchoolCourses = async (newCourses) => {
    setSchool(data => {
      return {
        ...data,
        courses: newCourses,
      };
    });
  };

  const contextValues = {
    setSchoolDescription,
    setSchoolContacts,
    setSchoolImages,
    setSchoolCourses,
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