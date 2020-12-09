package com.slim.trello.rest;

import com.slim.trello.dao.MyDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonController {
    private final MyDAO myDAO;

    @Autowired
    public PersonController(@Qualifier("personDAO") MyDAO myDAO) {
        this.myDAO = myDAO;
    }

    @GetMapping("/retrieveAllPeople")
    public List<Object> findAll() {
        return myDAO.findAll();
    }
}
