package com.slim.trello.entity;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Tasks {

    //Define fields
    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This will auto increment your primary key
    @Column(name = "task_id") //This is mapping the primary key to the id column in the table.
    private int taskId;

    @Column(name = "task_name") //This will map the the taskName field to the column named task_name in the table.
    private String taskName;

    @Column(name = "task_description") //This will map the taskDescription field to the column named task_description in the table.
    private String taskDescription;

    //default constructor
    public Tasks() {
    }

    //para constructor
    public Tasks(String taskName, String taskDescription) {
        this.taskName = taskName;
        this.taskDescription=taskName;
    }

    public int getId() {
        return taskId;
    }

    public void setId(int TaskId) {
        this.taskId = taskId;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getTaskDescription() {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
        this.taskDescription = taskDescription;
    }

    @Override
    public String toString() {
        return "Tasks{" +
                "taskId=" + taskId +
                ", taskName='" + taskName + '\'' +
                ", taskDescription='" + taskDescription + '\'' +
                '}';
    }
}
