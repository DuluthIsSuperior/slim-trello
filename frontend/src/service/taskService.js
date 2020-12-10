import axios from 'axios';

class taskService{
    retrieveAllTasks() {
      return axios.get(`http://localhost:8080/retrieveAllTasks`);
    }
    addTasks() {
      return axios.post(`http://localhost:8080/addTask`);
    }
    updateTasks() {
      return axios.put(`http://localhost:8080/updateTask`);
    }
    deleteTask(id) {
      return axios.delete(`http://localhost:8080/deleteTask`, id);
    }
}

export default new taskService();