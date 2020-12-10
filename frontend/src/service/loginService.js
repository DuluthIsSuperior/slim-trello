import axios from 'axios';

class loginService{
    retrieveAllPeople(){
        return axios.get(`http://localhost:8080/retrieveAllPeople`);
    }

    retrievePerson(id) {
      return axios.get(`http://localhost:8080/retrievePerson/${id}`);
    }
}
export default new loginService();