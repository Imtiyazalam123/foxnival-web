package com.foxnival.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {
    @Bean
   RouteLocator gatewayRoute(RouteLocatorBuilder builder) {

        return builder.routes()
                .route(p -> p.path("/demo/**")
                        .uri("https://foxnivalapidemo.azurewebsites.net"))
                .build();
   }
}
