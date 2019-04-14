import axios from 'axios';
const token = '4e959c0a4560e2d6750fe8bf20783cfca8e90e1f';
export default axios.create({
    baseURL: `https://api.github.com`,
    headers: { 
                contentType: `application/json`,
                charset: `utf-8`,
                Authorization: `token ${ token }`
                }
});