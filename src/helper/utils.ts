

export const converData = (arr: Array<any>) => {
  const array = [...arr];

  const result = array.map((el: any) => {
    return {
      id: el.id,
      title: el.attributes.title,
      description: el.attributes.description,
      image: el.attributes.image.data.attributes.url,
    };
  });

  return result;
};

export const getImageUrl = (image: string) => {
  const base_url = 'http://localhost:1337';
  return `${base_url}${image}`;
};
