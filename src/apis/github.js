import axios from 'axios';
const token = '8d511c22da5a161530e4ff3b5820f2460005ddfc';
export default axios.create({
    method: 'get',
    baseURL: `https://api.github.com`,
    headers: { 
                contentType: `application/json`,
                charset: `utf-8`,
                Authorization: `token ${ token }`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Content-Type': 'application/json',
                Pragma: 'no-cache',
                'Access-Control-Expose-Headers': 'Access-Token, Uid'
            }
});