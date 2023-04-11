package io.nakcha.spring.prod.controller;
import io.nakcha.spring.prod.model.car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import io.nakcha.spring.prod.service.produitservice;

import java.util.List;

@CrossOrigin(origins = "*")

@RestController
@Component
public class produit {


    @Autowired
    private produitservice produitservice;



    @RequestMapping("/cars")
    public List<car> getcars() {
        return produitservice.getcars();
    }

    @RequestMapping("/car/{id}")
    public car getcarbyid(@PathVariable long id){
        return produitservice.getcarbyid(id);
    }

    @RequestMapping(method = RequestMethod.DELETE ,value="/car/{id}")
    public void deletecar(@PathVariable long id ){
        produitservice.deletecar(id);
    }

    @RequestMapping(method = RequestMethod.POST,value = "/cars")
    public void addcar(@RequestBody car car){
        produitservice.addcar(car);
    }

    @RequestMapping(method = RequestMethod.PUT , value = "/car/{id}")
    public void updatecar(@RequestBody car car ,@PathVariable long id){
        produitservice.updatecar(car,id);
    }

}
