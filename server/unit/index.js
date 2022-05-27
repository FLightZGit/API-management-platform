const crypto = require("crypto"); // node自带crypto

//MD5加密
const encrypt = data => crypto.createHash('md5').update(data).digest(`hex`);

module.exports = {
  encrypt,
};

