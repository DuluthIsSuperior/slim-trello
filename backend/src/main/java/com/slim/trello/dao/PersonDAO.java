package com.slim.trello.dao;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class PersonDAO implements MyDAO {
    private final EntityManager entityManager;

    @Autowired
    public PersonDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<Object> findAll() {
        Session session = entityManager.unwrap(Session.class);
        Query<Object> myQuery = session.createQuery("from Person");
        return myQuery.getResultList();
    }
}
