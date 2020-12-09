package com.slim.trello.dao;

import java.util.List;

public interface MyDAO<T> {
    List<T> findAll();
    T findByID(int ID);
    boolean update(T object);
    boolean save(T object);
    boolean deleteByID(int ID);
}
