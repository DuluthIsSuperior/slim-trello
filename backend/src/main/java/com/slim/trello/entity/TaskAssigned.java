package com.slim.trello.entity;

import javax.persistence.*;

@Entity
@Table(name = "tasks_assigned")
public class TaskAssigned {
    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This will auto increment your primary key
    @Column(name = "person_id") //This is mapping the primary key to the person_id column in the table.
    private int personId;

    @Column(name = "task_id") //This will map the taskId field to the column named task_id in the table.
    private int taskId;

    //getter/setters
    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }

    public int getTaskId() {
        return taskId;
    }

    public void setTaskId(int taskId) {
        this.taskId = taskId;
    }

    //ToString Method
    @Override
    public String toString() {
        return "TaskAssigned{" +
                "personId=" + personId +
                ", taskId='" + taskId + '\'' +
                '}';
    }
}
