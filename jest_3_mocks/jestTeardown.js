'use strict';

module.exports = async () => {
  console.log('JEST TEAR DOWN');
  console.log(global.hlMyVar);

  return true;

  
};