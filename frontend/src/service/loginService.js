import axios from 'axios';

class loginService{
    retrieveAllPeople(){
        console.log(axios.get(`http://localhost:8080/retrieveAllPeople`))
        return axios.get(`http://localhost:8080/retrieveAllPeople`);
    }

    addPerson(){
            console.log(axios.post(`http://localhost:8080/addPerson`))
            return axios.post(`http://localhost:8080/addPerson`);
        }
    updatePerson(){
            console.log(axios.put(`http://localhost:8080/updatePerson`))
            return axios.put(`http://localhost:8080/updatePerson`);
    }
    deletePerson(id){
            console.log(axios.delete(`http://localhost:8080/deletePerson`, id))
            return axios.delete(`http://localhost:8080/deletePerson`, id);
    }
}

export default new loginService();