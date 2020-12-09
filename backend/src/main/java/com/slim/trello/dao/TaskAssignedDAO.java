package com.slim.trello.dao;

import com.slim.trello.entity.TaskAssigned;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class TaskAssignedDAO implements MyDAO<TaskAssigned> {
    private final EntityManager entityManager;

    @Autowired
    public TaskAssignedDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    private Session getSession() {
        return entityManager.unwrap(Session.class);
    }

    @SuppressWarnings("unchecked")
    @Override
    @Transactional
    public List<TaskAssigned> findAll() {
        return getSession().createQuery("from TaskAssigned").getResultList();
    }

    @Override
    @Transactional
    public TaskAssigned findByID(int ID) {
        return getSession().get(TaskAssigned.class, ID);
    }

    @Override
    @Transactional
    public TaskAssigned update(TaskAssigned taskAssigned) {
        try {
            getSession().saveOrUpdate(taskAssigned);
            return taskAssigned;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    @Transactional
    public TaskAssigned save(TaskAssigned taskAssigned) {
        taskAssigned.setId(0);
        return update(taskAssigned);
    }

    @Override
    @Transactional
    public boolean deleteByID(int ID) {
        TaskAssigned p = findByID(ID);
        if (p == null) {
            System.out.println("TaskAssigned not found");
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
