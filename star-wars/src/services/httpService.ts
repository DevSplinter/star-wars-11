export const get = async (url: string) => {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw 'exception';
  }
  return response.json();
};
