package com.slim.trello.rest;

import com.slim.trello.dao.MyDAO;
import com.slim.trello.entity.TaskAssigned;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class TaskAssignedController {
    private final MyDAO<TaskAssigned> myDAO;

    @Autowired
    public TaskAssignedController(@Qualifier("taskAssignedDAO") MyDAO<TaskAssigned> myDAO) {
        this.myDAO = myDAO;
    }

    @GetMapping("/retrieveAllTaskAssigned")
    public List<TaskAssigned> findAll() {
        return myDAO.findAll();
    }

    @PostMapping("/addTaskAssigned")
    public TaskAssigned addTaskAssigned(@RequestBody TaskAssigned theTaskAssigned){
        theTaskAssigned.setId(0);
        return myDAO.save(theTaskAssigned);
    }

    @PutMapping("/updateTaskAssigned")
    public TaskAssigned updateTaskAssigned(@RequestBody TaskAssigned updateTaskAssigned) {
        myDAO.save(updateTaskAssigned);
        return updateTaskAssigned;
    }

    @DeleteMapping("/deleteTaskAssigned/{personId}")
    public String deleteTaskAssigned(@PathVariable int personId) {
        TaskAssigned tempTaskAssigned = myDAO.findByID(personId);

        //This will throw an exception if the employee is null
        if(tempTaskAssigned == null) {
            return "Not found";
        }

        //This will execute the deleteByID.
        myDAO.deleteByID(personId);
        return "Deleted person id : " + personId;
    }
}
