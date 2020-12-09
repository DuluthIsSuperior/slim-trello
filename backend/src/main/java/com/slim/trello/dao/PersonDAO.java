package com.slim.trello.dao;

import com.slim.trello.entity.Person;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class PersonDAO implements MyDAO<Person> {
    private final EntityManager entityManager;

    @Autowired
    public PersonDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    private Session getSession() {
        return entityManager.unwrap(Session.class);
    }

    @SuppressWarnings("unchecked")
    @Override
    @Transactional
    public List<Person> findAll() {
        return getSession().createQuery("from Person").getResultList();
    }

    @Override
    @Transactional
    public Person findByID(int ID) {
        return getSession().get(Person.class, ID);
    }

    @Override
    @Transactional
    public boolean update(Person person) {
        try {
            getSession().saveOrUpdate(person);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    @Transactional
    public boolean save(Person person) {
        person.setId(0);
        return update(person);
    }

    @Override
    @Transactional
    public boolean deleteByID(int ID) {
        Person p = findByID(ID);
        if (p == null) {
            System.out.println("Person not found");
            return false;
        }
        try {
            getSession().delete(p);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
