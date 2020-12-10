import axios from 'axios';

class taskServiceAssigned{
    retrieveAllTasks() {
      return axios.get(`http://localhost:8080/retrieveAllTaskAssigned`);
    }

    addTasks() {
      return axios.post(`http://localhost:8080/addTaskAssigned`);
    }
    updateTasks(taskAssigned){
            return axios.put(`http://localhost:8080/updateTaskAssigned`, taskAssigned);
    }

    deleteTask(id) {
     return axios.delete(`http://localhost:8080/deleteTask`, id);
    }
}

export default new taskServiceAssigned();