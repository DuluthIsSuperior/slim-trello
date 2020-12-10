import axios from 'axios';

class taskService{
    retrieveAllTasks(){
        console.log(axios.get(`http://localhost:8080/retrieveAllTasks`))
        return axios.get(`http://localhost:8080/retrieveAllTasks`);
    }
    addTasks(){
        console.log(axios.post(`http://localhost:8080/addTask`))
        return axios.post(`http://localhost:8080/addTask`);
    }
    updateTasks(task){
            console.log(axios.put(`http://localhost:8080/updateTask`, task))
            return axios.put(`http://localhost:8080/updateTask`, task);
    }
    deleteTask(id){
            console.log(axios.delete(`http://localhost:8080/deleteTask`, id))
            return axios.delete(`http://localhost:8080/deleteTask`, id);
    }
}

export default new taskService();