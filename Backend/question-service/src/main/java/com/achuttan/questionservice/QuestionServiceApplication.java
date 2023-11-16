package com.achuttan.questionservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class QuestionServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuestionServiceApplication.class, args);
	}
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//	        public void addCorsMappings(CorsRegistry registry) {
//	            registry.addMapping("/question").allowedOrigins("http://localhost:3000");
//	        }
//	    };
//	}
}
