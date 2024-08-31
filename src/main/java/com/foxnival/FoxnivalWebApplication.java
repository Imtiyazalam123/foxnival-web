package com.foxnival;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FoxnivalWebApplication {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(FoxnivalWebApplication.class);
        app.setWebApplicationType(WebApplicationType.REACTIVE);
        app.run();
    }

}
