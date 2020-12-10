import axios from 'axios';

class taskServiceAssigned{
    retrieveAllTaskAssigned() {
      return axios.get(`http://localhost:8080/retrieveAllTaskAssigned`);
    }

    addTaskAssigned() {
      return axios.post(`http://localhost:8080/addTaskAssigned`);
    }
    updateTaskAssigned(taskAssigned){
            return axios.put(`http://localhost:8080/updateTaskAssigned`, taskAssigned);
    }

    deleteTaskAssigned(id) {
     return axios.delete(`http://localhost:8080/deleteTask`, id);
    }
}

export default new taskServiceAssigned();