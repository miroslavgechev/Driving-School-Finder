import { useState, createContext, useContext } from 'react';
import { uploadFile } from 'services/firebaseStorageService';
import { addEmptyRatingsDirectory, addEmptyReviewDirectory, addSchool } from 'services/firestoreService';

const SetSchoolContext = createContext();

export const SetSchoolProvider = ({ children }) => {
  const [school, setSchool] = useState(null);
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
      await uploadImage('logoUrl', files?.logoUrl);
      await uploadImage('mainImage', files?.mainImage);
      await uploadImage('supportImages', files?.supportImages);
      await addSchool(school);
      await addEmptyReviewDirectory(school.ownerUid);
      await addEmptyRatingsDirectory(school.ownerUid);
      setFiles(null);
    } catch (error) {
      throw new Error(error);
    }
  };

  const uploadImage = async (filename, filepath) => {
    try {
      if (!filepath && !Array.isArray(school[filename]) && school[filename].startsWith('https')) {
        return;
      } else if (filepath && Array.isArray(filepath)) {
        const fileLinks = await Promise.all(
          filepath.map(async (file, index) => {
            const fileLink = await uploadFile(`${school.ownerUid}/${filename}/${index}`, file);
            return fileLink;
          }));
        school[filename] = fileLinks;

      } else if (filepath && !Array.isArray(filepath)) {
        const fileLink = await uploadFile(`${school.ownerUid}/${filename}`, filepath);
        school[filename] = fileLink;
      } else if (!filepath) {
        if (Array.isArray(school[filename]) && school[filename].length > 0) {
          return;
        }

        school[filename] = null;
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
    setSchool,
    school,
    files,
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