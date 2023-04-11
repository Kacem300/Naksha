package io.nakcha.spring.prod.controller;
import io.nakcha.spring.prod.service.messageservice;
import io.nakcha.spring.prod.model.message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")

@RestController
public class essage {
    @Autowired
    private messageservice messageservice;
    @RequestMapping("/messages")
    public List<message> getmessage(){
        return messageservice.getmessage();
    }


@RequestMapping(method = RequestMethod.POST,value = "/messages")
public  void addmessage(@RequestBody message message){
    messageservice.addmessage(message);
}
}