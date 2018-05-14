package com.pvt15;


import com.pvt15.DB.entity.Information;
import com.pvt15.DB.entity.LightPost;
import com.pvt15.DB.entity.LightPostLocations;
import com.pvt15.DB.repository.InformationRepository;
import com.pvt15.DB.repository.LightPostRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@SpringBootApplication
public class ServerApplication {

	public final static Logger logger = LoggerFactory.getLogger(ServerApplication.class);

	public static void main(String[] args) {

		SpringApplication.run(ServerApplication.class, args);


	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(12);
	}


	@Bean
	CommandLineRunner initData(InformationRepository informationRepository, LightPostRepository lightPostRepository) {
		return args -> {
			createInformation(informationRepository);
			createLightPost(lightPostRepository);
		};
	}
	private void createInformation(InformationRepository informationRepository){
		informationRepository.save(new Information("Gamla stan", " Detta handlar egentligen om gamla stan! Learn how to efficiently build and implement microservices in Spring,\n" +
				"and how to use Docker and Mesos to push the boundaries. Examine a number of real-world use cases and hands-on code examples.\n" +
				"Distribute your microservices in a completely new way"));
		informationRepository.save(new Information("Kungliga slottet", "Detta handlar egentligen om slottet! A no-nonsense guide containing case studies and best practise for Spring Boot"));
	}

	private void createLightPost(LightPostRepository lightPostRepository){
		LightPost lightPost = new LightPost(0,"FFFF", new LightPostLocations("59.3293", "18.0686"));
		lightPostRepository.save(lightPost);
	}
}