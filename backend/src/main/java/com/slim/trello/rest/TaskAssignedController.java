package com.slim.trello.rest;

import com.slim.trello.dao.MyDAO;
import com.slim.trello.entity.TaskAssigned;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class TaskAssignedController {
    private final MyDAO myDAO;

    @Autowired
    public TaskAssignedController(@Qualifier("taskIMPL") MyDAO myDAO) {
        this.myDAO = myDAO;
    }

    @GetMapping("/retrieveAllTaskAssigned")
    public List<Object> findAll() {
        return myDAO.findAll();
    }

    @PostMapping("/addTaskAssigned")
    public TaskAssigned addTaskAssigned(@RequestBody TaskAssigned theTaskAssigned){
        theTaskAssigned.setId(0);
        myDAO.save(theTaskAssigned);
    }
    @PutMapping("/updateTaskAssigned")
    public TaskAssigned updateTaskAssigned(@RequestBody TaskAssigned updateTaskAssigned) {
        myDAO.save(updateTaskAssigned);
        return updateTaskAssigned;
    }
    @DeleteMapping("/deleteTaskAssigned/{personId}")
    public String deleteTaskAssigned(@PathVariable int personId) {
        TaskAssigned tempTaskAssigned = (TaskAssigned) myDAO.findById(personId);

        //This will throw an exception if the employee is null
        if(tempTaskAssigned == null) {
            throw new RuntimeException("TaskAssigned is not found : " + personId);
        }

        //This will execute the deleteByID.
        myDAO.deleteById(personId);
        return "Deleted person id : " + personId;
    }
}
