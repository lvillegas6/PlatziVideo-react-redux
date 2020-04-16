const URL_REGEX = /^http[s]?:\/\/.*$/;
const isUrl = url => (URL_REGEX.test(url) ? url : false);
export default isUrl;
