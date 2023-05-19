import instance from '.';

export const getCategories = async () => {
  return await instance.get('categories?populate=*');
};

export const getFeatures = async () => {
  return await instance.get(`features?populate=*`);
};
