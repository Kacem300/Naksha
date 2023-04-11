package io.nakcha.spring.prod.service;
import io.nakcha.spring.prod.model.car;


import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;



@Service



public class produitservice {


   static private ArrayList<car> cars = new ArrayList<>(Arrays.asList(
            new car(1,"Nkasha 1",18,"brand1","assets/img/pic1.png"),
            new car(2,"Nkasha 2",15,"bransd2","assets/img/pic2.png")

    ));
public List<car> getcars(){

   return cars;
}

public car getcarbyid( long id){

    return cars.stream().filter(car -> car.getId() == id).findFirst().orElse(null);

}

    public void deletecar(long id) {

    cars.removeIf(car ->car.getId()== id);
    }

    public void addcar(car car) {

    cars.add(car);
    }

    public void updatecar(car car, long id) {

     cars.forEach(car1 -> {
        if(car1.getId()== id) {
            cars.set(cars.indexOf(car1),car );
        }
        });
    }


}



