import md5 from 'md5';

const MD5_REGEX = /^[0-9a-f]{32}$/;
const BASE_URL = 'https://gravatar.com/avatar/';

const getHash = email => {
  const formatteEmail = (typeof email === 'string') ?
    email.trim().toLowerCase() :
    'unspecified';
  //string.match(regex) retorna null o un arreglo
  return formatteEmail.match(MD5_REGEX) ?
    formatteEmail :
    md5(formatteEmail, { encoding: 'binary' });
};
const gravatar = email => {
  return `${BASE_URL}${getHash(email)}`;
};

export default gravatar;
