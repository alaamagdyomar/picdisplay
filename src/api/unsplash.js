import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID zjWPw0p9TgTA2yejgeHAU2dmAVPcvMs2_yVBM49t1V4'
    }
});