package com.slim.trello.rest;

import com.slim.trello.dao.MyDAO;
import com.slim.trello.entity.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class PersonController {
    private final MyDAO myDAO;

    @Autowired
    public PersonController(@Qualifier("personIMPL") MyDAO myDAO) {
        this.myDAO = myDAO;
    }

    @GetMapping("/retrieveAllPeople")
    public List<Object> findAll() {
        return myDAO.findAll();
    }

    @PostMapping("/addPerson")
    public Person addPerson(@RequestBody Person thePerson){
        thePerson.setId(0);
        myDAO.save(thePerson);
    }
    @PutMapping("/updatePerson")
    public Person updatePerson(@RequestBody Person updatePerson) {
        myDAO.save(updatePerson);
        return updatePerson;
    }
    @DeleteMapping("/deletePerson/{personId}")
    public String deletePerson(@PathVariable int personId) {
        Person tempPerson = (Person) myDAO.findById(personId);

        //This will throw an exception if the employee is null
        if(tempPerson == null) {
            throw new RuntimeException("Person is not found : " + personId);
        }

        //This will execute the deleteByID.
        myDAO.deleteById(personId);
        return "Deleted person id : " + personId;
    }

}
