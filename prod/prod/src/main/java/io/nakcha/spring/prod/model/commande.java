package io.nakcha.spring.prod.model;


import java.util.ArrayList;
import java.util.List;

public class commande {
 private String nom ;

    private String prenom;
    private String date;
    //List<car> translation ; translation =  new HashMap<String,String>();
    ArrayList<car> car;
    public commande(String benbrahim , String kacem,String date) {
        this.nom = benbrahim;
        this.prenom=kacem;
        this.date=date;
        car = new ArrayList<car>();

    }




    public ArrayList<car> getProduit() {
        return car;
    }

    public void setProduit(ArrayList<car> produit) {
        this.car = produit;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
}