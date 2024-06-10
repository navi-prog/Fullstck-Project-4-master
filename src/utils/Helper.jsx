import React from 'react';

// This is For bring the name of image 
export const trimExtention = fileName => fileName.split("/")[2].split(".")[0];
// This is For Show The Images
export const getImg = (imgy, name) => {
  return  <img src={require(`../img/${trimExtention(imgy)}.png`)} alt={`there is img of ${name}`}/>
}
// This is For Change the number for string to number and revmove the $
export const changesNums = (num) =>{
  let newNums = num.split('$')
  return parseFloat(newNums)
}