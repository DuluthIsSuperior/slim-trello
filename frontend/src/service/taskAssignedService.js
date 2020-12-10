import axios from 'axios';

class taskServiceAssigned{
    retrieveAllTaskAssigned(){
        console.log(axios.get(`http://localhost:8080/retrieveAllTaskAssigned`))
        return axios.get(`http://localhost:8080/retrieveAllTaskAssigned`);
    }
    addTaskAssigned(){
        console.log(axios.post(`http://localhost:8080/addTaskAssigned`))
        return axios.post(`http://localhost:8080/addTaskAssigned`);
    }
    updateTaskAssigned(taskAssigned){
            console.log(axios.put(`http://localhost:8080/updateTaskAssigned`, taskAssigned))
            return axios.put(`http://localhost:8080/updateTaskAssigned`, taskAssigned);
    }
    deleteTaskAssigned(id){
            console.log(axios.delete(`http://localhost:8080/deleteTask`, id))
            return axios.delete(`http://localhost:8080/deleteTask`, id);
    }
}

export default new taskServiceAssigned();