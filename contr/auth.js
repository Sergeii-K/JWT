const jws = require('jws');
const fs = require('fs-extra');

const getPrivatekey = async () => {
    const privKey = await fs.readFile(`${__dirname}/../key/jwtRS256.key`, 'utf-8');
    return privKey;
}

const getPublikkey = async () => {
    const pubKey = await fs.readFile(`${__dirname}/../key/jwtRS256.key.pub`, 'utf-8');
    return pubKey;
}


const CreateAccessT = async (data) => {

    const privKey = await getPrivatekey();

    const signature = jws.sign({
        header: { alg: 'RS256' },
        payload: data,
        secret: privKey,
      });

        console.log(signature)
       

        return signature


   

}
const checkAccessT = async (token) => {
    const pubKey = await getPublikkey();
    const check = jws.verify(token, 'RS256', pubKey);
    console.log(check);
}
 const token = 'eyJhbGciOiJSUzI1NiJ9.eyJ1c2VySWQiOjIwLCJuYW1lIjoiU2VyZ2VpIn0.edS8E8O9l43SBQx0xO89OT9gPHYCOTsl835AJP9LC9oqMwG8cSh6wQU8WaqmCXhTvHydwwQGPQxhYea6UUZj_NHwYb1TSusqCxBtqghV7bexmpMM_LtcN0xJYmWTbJyTpUgnDWtB21nqrRC4Gy0XLT_D4S7HXMLGXfDbSpVnnH6-Ie0bg86IztiaBXJj6GuGq64DMeHoU554_mkQtyud2RJNUThpA7jffKaBpTHgxmYZZc2Vs4s8bwPmcooQ3eqYAQnmWJx-9saJpRnLHemqq0Y2-BNplFlOReyr3Rd4cWqyVyVapAgTb170yQOXbBGMg-OE7dgua-819UsbgC0PGn2XCk82nt23OY5Ro9Q7k8kOUi3bjnBv--UIC9Rto6ANC1lbQeNkNUkIaaEelb251_PikTdTTbQa-etyi7JR9c69dphux9u8OzWBVZ-zz1SoVDDOoPUVMHG5yOgsMmQlQe4qsug8IJK8btH047d5no7sNi8HdbNOEzejVI7kHnC5Mw5-UOi3sN1YCkpw6uQm4cdLxf-uqLq-TMoNPMpGBGotlVuL9vX4CutD57IeXbCd0NhzvZwHDZopBgiaj15b4KSB-3P7iAZhqRnZebYKyZMFjIIOYSfr8tFY3r2LGTTMNiXVioizoEtq-fGSLDbV7MqhZVUyoj6KxjnB9E57OhU';

checkAccessT(token);




module.exports = {
    CreateAccessT           
}