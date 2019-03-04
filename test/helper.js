// mix helper
const helper = {};

helper.sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};

Object.assign(window.macacaHelper, helper);