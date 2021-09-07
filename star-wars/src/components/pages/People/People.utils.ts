export const extractPersonId = (url: string) => {
  const destructedUrl = url.split('/');
  return destructedUrl[destructedUrl.length - 2];
};
