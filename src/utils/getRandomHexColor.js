import CryptoJS from 'crypto-js';

const getRandomHexColor = (seed = 0) => {
    const hash = CryptoJS.SHA256(seed.toString());
    return hash.toString().slice(0, 6).padEnd(6, '0');
};
export default getRandomHexColor;