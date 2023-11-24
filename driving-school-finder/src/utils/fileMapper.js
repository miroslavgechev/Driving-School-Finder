const fileMapper = async (imageFiles) => {

  const readAsDataURL = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const imageUrls = await Promise.all(imageFiles.map(readAsDataURL));
  return imageUrls;
};

export default fileMapper;