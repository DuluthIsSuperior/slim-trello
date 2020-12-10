import axios from 'axios';

class taskServiceAssigned{
    retrieveAllTasks() {
      return axios.get(`http://localhost:8080/retrieveAllTaskAssigned`);
    }

    addTasks() {
      return axios.post(`http://localhost:8080/addTaskAssigned`);
    }

    updateTasks() {
      return axios.put(`http://localhost:8080/updateTaskAssigned`);
    }

    deleteTask(id) {
     return axios.delete(`http://localhost:8080/deleteTask`, id);
    }
}

export default new taskServiceAssigned();