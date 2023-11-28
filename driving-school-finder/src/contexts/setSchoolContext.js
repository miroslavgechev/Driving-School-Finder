import { useState, createContext, useContext } from 'react';
import { uploadFile } from 'services/firebaseStorageService';
import { addSchool } from 'services/firestoreService';

const SetSchoolContext = createContext();

export const SetSchoolProvider = ({ children }) => {

  const [school, setSchool] = useState();
  const [files, setFiles] = useState();

  const setSchoolDescription =
    ({ name, description, logoUrl, whyUs1, whyUs2, whyUs3, regionsServed, categoriesServed, ownerUid }) => {
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

  const setSchoolFiles = (name, newData) => {
    setFiles(data => {
      return {
        ...data,
        [name]: newData
      };
    });

  };

  const uploadSchool = async () => {
    try {
      await uploadImage('logoUrl', files.logoUrl);
      await uploadImage('mainImage', files.mainImage);
      await uploadImage('supportImages', files.supportImages);
      console.log(school);
      await addSchool(school);
      setFiles(null);
    } catch (error) {
      console.log(error.message);
      throw new Error(error);
    }
  };

  const uploadImage = async (filename, filepath) => {
    try {
      if (!filepath) {
        school[filename] = null;
      } else if (Array.isArray(filepath)) {
        const fileLinks = await Promise.all(
          filepath.map(async (file, index) => {
            const fileLink = await uploadFile(`${school.ownerUid}/${filename}/${index}`, file);
            return fileLink;
          }));
        school[filename] = fileLinks;
      } else if (!Array.isArray(filepath)) {
        const fileLink = await uploadFile(`${school.ownerUid}/${filename}`, filepath);
        school[filename] = fileLink;
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const contextValues = {
    setSchoolDescription,
    setSchoolContacts,
    setSchoolImages,
    setSchoolCourses,
    uploadSchool,
    setSchoolFiles,
    school,
    files
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