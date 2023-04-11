package io.nakcha.spring.prod.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


public class car {

private String title;
private int price;
private String description;
public String img;
public long id ;


    public car(long id ,String title, int price, String description,String img) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.id=id;
        this.img=img;

    }

    public String gettitle() {
        return title;
    }

    public void settitle(String title) {
        this.title = title;
    }

    public int getprice() {
        return price;
    }

    public void setprice(int price) {
        this.price = price;
    }

    public String getdescription() {
        return description;
    }

    public void setdescription(String description) {
        this.description = description;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}

