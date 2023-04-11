package io.nakcha.spring.prod.service;
import io.nakcha.spring.prod.model.commande;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Service

public class commandeservice {


    static private ArrayList<commande> commandes = new ArrayList<>(Arrays.asList(
   // new commande(12,10,"12")
            new commande("benbrahim","kacem","13/20/23")
    ));

    public List<commande> getcommande() {
        return commandes;
    }

    public void addcommande(commande commande) {
        commandes.add(commande);
    }
}
