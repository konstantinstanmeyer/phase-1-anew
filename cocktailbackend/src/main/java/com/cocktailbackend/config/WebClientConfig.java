package com.cocktailbackend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

// import reactor.core.publisher.Mono;

@Configuration
public class WebClientConfig {

    @Value("${cocktaildb.api.base-url}")
    private String baseUrl;

    @Bean
    public WebClient webClient() {
        return WebClient.builder()
                .baseUrl(baseUrl)
                .build();
    }

    // private ExchangeFilterFunction logRequest() {
    //     return ExchangeFilterFunction.ofRequestProcessor(request -> {
    //         System.out.println("➡️ REQUEST");
    //         System.out.println(request.method() + " " + request.url());
    //         request.headers().forEach((k, v) -> System.out.println(k + ": " + v));
    //         return Mono.just(request);
    //     });
    // }

    // private ExchangeFilterFunction logResponse() {
    //     return ExchangeFilterFunction.ofResponseProcessor(response -> {
    //         System.out.println("⬅️ RESPONSE STATUS: " + response.statusCode());
    //         return Mono.just(response);
    //     });
    // }
}