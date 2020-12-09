import axios from 'axios';

class loginService{
    retrieveAllPeople(){
        console.log(axios.get(`http://localhost:8080/retrieveAllPeople`))
        return axios.get(`http://localhost:8080/retrieveAllPeople`);
    }
}
export default new loginService();