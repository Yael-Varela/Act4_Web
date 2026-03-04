package com.example102.demo.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.example102.demo.services.HelloWorldServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class helloWorld {
    @Autowired
    private HelloWorldServices service;
    
    @GetMapping("/")
    public String getMethodName(@RequestParam String name) {
        return service.generateMessage(name);
    }i
    
}
