export const get = async (url: string) => {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error('error');
  }
  return response.json();
};
