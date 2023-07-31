const fs = require('fs');
const path = require('path');

const imageFolderPath = 'https://raw.githubusercontent.com/intrepidcanadian/nftserver/main/assets/players/'; // Replace this with the folder path where your images are located

const getImagePath = (id) => {
  // Generate the image filename based on the artist name and ID
  const imageName = `${id}.png`;
  return path.join(imageFolderPath, imageName);
};

const imagePaths = {
  og_anunoby: id => getImagePath(id),
  pascal_siakam: id => getImagePath(id),
  lebron_james: id => getImagePath(id),
  anthony_davis: id => getImagePath(id),
};

module.exports = imagePaths;