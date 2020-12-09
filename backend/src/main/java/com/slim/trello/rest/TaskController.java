package com.slim.trello.rest;

import com.slim.trello.dao.MyDAO;
import com.slim.trello.entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class TaskController {
    private final MyDAO<Task> myDAO;

    @Autowired
    public TaskController(@Qualifier("taskDAO") MyDAO<Task> myDAO) {
        this.myDAO = myDAO;
    }

    @GetMapping("/retrieveAllTasks")
    public List<Task> findAll() {
        return myDAO.findAll();
    }

    @PostMapping("/addTask")
    public Task addTask(@RequestBody Task theTask){
        theTask.setId(0);
        return myDAO.save(theTask);
    }

    @PutMapping("/updateTask")
    public Task updateTask(@RequestBody Task updateTask) {
        myDAO.save(updateTask);
        return updateTask;
    }

    @DeleteMapping("/deleteTask/{taskId}")
    public String deleteTask(@PathVariable int taskId) {
        Task tempTask = myDAO.findByID(taskId);

        //This will throw an exception if the employee is null
        if(tempTask == null) {
            return "Not found";
        }

        //This will execute the deleteByID.
        myDAO.deleteByID(taskId);
        return "Deleted Task id : " + taskId;
    }
}
