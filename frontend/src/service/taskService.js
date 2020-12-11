import axios from 'axios';

class taskService{
    retrieveAllTasks() {
      return axios.get(`http://localhost:8080/retrieveAllTasks`);
    }

    retrieveTask(id) {
      return axios.get(`http://localhost:8080/retrieveTask/${id}`);
    }

    addTasks() {
      return axios.post(`http://localhost:8080/addTask`);
    }

    updateTasks(task){
            return axios.put(`http://localhost:8080/updateTask`, task);
    }

    deleteTask(id) {
      return axios.delete(`http://localhost:8080/deleteTask`, id);
    }
}

export default new taskService();