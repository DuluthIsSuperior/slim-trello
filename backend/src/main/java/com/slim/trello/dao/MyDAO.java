package com.slim.trello.dao;

import java.util.List;

public interface MyDAO<T> {
    List<T> findAll();
    T findByID(int ID);
    T update(T object);
    T save(T object);
    boolean deleteByID(int ID);
}
