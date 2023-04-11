package io.nakcha.spring.prod.service;
import io.nakcha.spring.prod.model.message;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class messageservice {
    static private ArrayList<message> messages = new ArrayList<>(Arrays.asList(

    ));
public List<message>getmessage(){
    return messages;
}

public void addmessage(message message){ messages.add(message);}
}