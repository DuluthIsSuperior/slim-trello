package com.slim.trello.dao;

import com.slim.trello.entity.Task;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class TaskDAO implements MyDAO<Task> {
    private final EntityManager entityManager;

    @Autowired
    public TaskDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    private Session getSession() {
        return entityManager.unwrap(Session.class);
    }

    @SuppressWarnings("unchecked")
    @Override
    @Transactional
    public List<Task> findAll() {
        return getSession().createQuery("from Task").getResultList();
    }

    @Override
    @Transactional
    public Task findByID(int ID) {
        return getSession().get(Task.class, ID);
    }

    @Override
    @Transactional
    public boolean update(Task task) {
        try {
            getSession().saveOrUpdate(task);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    @Transactional
    public boolean save(Task task) {
        task.setId(0);
        return update(task);
    }

    @Override
    @Transactional
    public boolean deleteByID(int ID) {
        Task p = findByID(ID);
        if (p == null) {
            System.out.println("Task not found");
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
