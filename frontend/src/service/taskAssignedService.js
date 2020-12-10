import axios from 'axios';

class taskServiceAssigned{
    retrieveAllTasks(){
        console.log(axios.get(`http://localhost:8080/retrieveAllTaskAssigned`))
        return axios.get(`http://localhost:8080/retrieveAllTaskAssigned`);
    }
    addTasks(){
        console.log(axios.post(`http://localhost:8080/addTaskAssigned`))
        return axios.post(`http://localhost:8080/addTaskAssigned`);
    }
    updateTasks(taskAssigned){
            console.log(axios.put(`http://localhost:8080/updateTaskAssigned`, taskAssigned))
            return axios.put(`http://localhost:8080/updateTaskAssigned`, taskAssigned);
    }
    deleteTask(id){
            console.log(axios.delete(`http://localhost:8080/deleteTask`, id))
            return axios.delete(`http://localhost:8080/deleteTask`, id);
    }
}

export default new taskServiceAssigned();