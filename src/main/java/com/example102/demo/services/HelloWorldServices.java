package com.example102.demo.services;
import org.springframework.stereotype.Service;

@Service
public class HelloWorldServices {
    public String generateMessage(String name) {
        return "Hola " + name;
    }
}
