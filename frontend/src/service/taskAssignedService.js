import axios from 'axios';

class taskAssignedService {
    retrieveAllTaskAssigned() {
      return axios.get(`http://localhost:8080/retrieveAllTaskAssigned`);
    }

    retrieveTasksAssignedByPerson(id) {
      return axios.get(`http://localhost:8080/retrieveTasksAssignedByPerson/${id}`);
    }

    addTaskAssigned(task) {
      return axios.post(`http://localhost:8080/addTaskAssigned`, task);
    }

    updateTaskAssigned(taskAssigned){
      return axios.put(`http://localhost:8080/updateTaskAssigned`, taskAssigned);
    }

    deleteTaskAssigned(id) {
     return axios.delete(`http://localhost:8080/deleteTask`, id);
    }
}

export default new taskAssignedService();