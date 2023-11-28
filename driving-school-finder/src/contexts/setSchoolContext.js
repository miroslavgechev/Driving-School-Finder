import { useState, createContext, useContext } from 'react';

const SetSchoolContext = createContext();

export const SetSchoolProvider = ({ children }) => {

  const [school, setSchool] = useState();

  const setSchoolDescription =
    ({ name, description, logoUrl, whyUs1, whyUs2, whyUs3, regionsServed, categoriesServed, ownerUid }) => {
      console.log(ownerUid);
      setSchool(data => {
        return {
          ...data,
          name,
          description,
          logoUrl,
          whyUs: [whyUs1, whyUs2, whyUs3],
          regionsServed: [...regionsServed],
          categoriesServed: [...categoriesServed],
          ownerUid,
        };
      });
    };

  const setSchoolContacts = ({ city, region, street, email, phone }) => {
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

  const setSchoolImages = ({ mainImage, supportImages }) => {
    setSchool(data => {
      return {
        ...data,
        mainImage,
        supportImages,
      };
    });
  };

  const setSchoolCourses = (newCourses) => {
    setSchool(data => {
      return {
        ...data,
        courses: newCourses,
      };
    });
  };

  const uploadSchool = async () => {
    console.log('school', school);
  };

  const contextValues = {
    setSchoolDescription,
    setSchoolContacts,
    setSchoolImages,
    setSchoolCourses,
    uploadSchool,
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