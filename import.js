const fs = require('fs');
const path = require('path');

const imageFolderPath = '/assets/players/'; // Replace this with the folder path where your images are located

const getImagePath = (artistName, id) => {
  // Generate the image filename based on the artist name and ID
  const imageName = `${artistName.replace(' ', '_').toLowerCase()}${id}.png`;
  return path.join(imageFolderPath, imageName);
};

const imagePaths = {
  og_anunoby: id => getImagePath('oganunoby', id),
  pascal_siakam: id => getImagePath('pascalsiakam', id),
  lebron_james: id => getImagePath('lebronjames', id),
  anthony_davis: id => getImagePath('anthonydavis', id),
};

module.exports = imagePaths;