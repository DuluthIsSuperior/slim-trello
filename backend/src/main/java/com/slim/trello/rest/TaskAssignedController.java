package com.slim.trello.rest;

import com.slim.trello.dao.MyDAO;
import com.slim.trello.entity.Person;
import com.slim.trello.entity.Task;
import com.slim.trello.entity.TaskAssigned;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class TaskAssignedController {
    private final MyDAO<TaskAssigned> myDAO;
    private final MyDAO<Person> personMyDAO;
    private final MyDAO<Task> taskMyDAO;

    @Autowired
    public TaskAssignedController(@Qualifier("taskAssignedDAO") MyDAO<TaskAssigned> myDAO, @Qualifier("personDAO") MyDAO<Person> personMyDAO,
                                  @Qualifier("taskDAO")MyDAO<Task> taskMyDAO) {
        this.myDAO = myDAO;
        this.personMyDAO = personMyDAO;
        this.taskMyDAO = taskMyDAO;
    }

    @GetMapping("/retrieveAllTaskAssigned")
    public List<TaskAssigned> findAll() {
        return myDAO.findAll();
    }

    @PostMapping("/addTaskAssigned")
    public String addTaskAssigned(@RequestBody TaskAssigned theTaskAssigned,int personId,
                                         int taskId){
        Task tempTask = taskMyDAO.findByID(taskId);
        Person tempPerson = personMyDAO.findByID(personId);
        theTaskAssigned.setId(0);

        //This will throw an exception if the employee is null
        if(tempTask == null || tempPerson == null) {
            return "Not found";
        }
        else{
             myDAO.save(theTaskAssigned);
             return "added";
        }
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
