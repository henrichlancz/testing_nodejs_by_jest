'use strict';


module.exports = async () => {
  console.log('JEST SETUP');
  global.hlMyVar = 'tostos';

  return true;
};