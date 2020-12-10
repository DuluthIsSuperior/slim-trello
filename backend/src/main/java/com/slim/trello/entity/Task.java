package com.slim.trello.entity;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    //Define fields
    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This will auto increment your primary key
    @Column(name = "id") //This is mapping the primary key to the id column in the table.
    private int id;

    @Column(name = "name") //This will map the the taskName field to the column named task_name in the table.
    private String name;

    @Column(name = "description") //This will map the taskDescription field to the column named task_description in the table.
    private String description;

    public int getId() {
        return id;
    }

    public void setId(int TaskId) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Tasks{" +
                "taskId=" + id +
                ", taskName='" + name + '\'' +
                ", taskDescription='" + description + '\'' +
                '}';
    }
}
