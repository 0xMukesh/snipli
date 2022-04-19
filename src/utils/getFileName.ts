const getFileName = (filePath: string) => {
  const fileName = filePath.split("/").pop();
  return fileName;
};

export default getFileName;
