import axios from 'axios';

class loginService{
    retrieveAllPeople() {
      return axios.get(`http://localhost:8080/retrieveAllPeople`);
    }

    addPerson(){
            console.log(axios.post(`http://localhost:8080/addPerson`));
            return axios.post(`http://localhost:8080/addPerson`);
        }
    updatePerson(person){
            console.log(axios.put(`http://localhost:8080/updatePerson`, person));
            return axios.put(`http://localhost:8080/updatePerson`, person);
    }

    deletePerson(id) {
      return axios.delete(`http://localhost:8080/deletePerson`, id);
    }
}

export default new loginService();