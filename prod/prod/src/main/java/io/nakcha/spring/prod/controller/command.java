package io.nakcha.spring.prod.controller;
import io.nakcha.spring.prod.model.commande;
import io.nakcha.spring.prod.service.commandeservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
public class command {
        @Autowired
        private commandeservice commandeservice;
        @RequestMapping("/commandes")
        public List<commande> getmessage(){
            return commandeservice.getcommande();
        }


        @RequestMapping(method = RequestMethod.POST,value = "/commandes")
        public  void addcommande(@RequestBody commande commande){
            commandeservice.addcommande(commande);
        }
    }

