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
			createLightPostAndInformation(lightPostRepository, informationRepository);
		};
	}

	private void createLightPostAndInformation(LightPostRepository lightPostRepository, InformationRepository informationRepository){
		
		//StOchDraken
		LightPost stolpe = new LightPost(0,"FFFF", new LightPostLocations("59.325065", "18.073701"));
		newLightPostWithInformation(lightPostRepository, stolpe, 
			new Information("St. George and the Dragon", "../assets/imgs/information/Stolpe1.1.png"));
		newLightPostWithInformation(lightPostRepository, stolpe, new Information("St. George and the Dragon", "../assets/imgs/information/Stolpe1.2.png"));

		//Lilla nygatan 5
		stolpe = new LightPost(0,"F0F0", new LightPostLocations("59.324368", "18.067855"));
		newLightPostWithInformation(lightPostRepository, stolpe,
			new Information("Lilla Nygatan 5", "../assets/imgs/information/Stolpe2.1.png"));
		newLightPostWithInformation(lightPostRepository, stolpe, new Information("Lilla Nygatan 5", "../assets/imgs/information/Stolpe2.2.png"));

		//Stortorget
		stolpe = new LightPost(0,"0000", new LightPostLocations("59.324956", "18.070806"));
		newLightPostWithInformation(lightPostRepository, stolpe,
			new Information("Stortorget", "../assets/imgs/information/Stolpe3.1.png"));
		newLightPostWithInformation(lightPostRepository, stolpe, new Information("Stortorget", "../assets/imgs/information/Stolpe3.2.png"));

		//Riddarholmen
		stolpe = new LightPost(0,"AAAA", new LightPostLocations("59.324752", "18.063964"));
		newLightPostWithInformation(lightPostRepository,stolpe, 
			new Information("Riddarholm Church", "../assets/imgs/information/Stolpe4.1.png"));
		newLightPostWithInformation(lightPostRepository, stolpe, new Information("Riddarholm Church", "../assets/imgs/information/Stolpe4.2.png"));

		//Mårten trotzigs gränd
		stolpe = new LightPost(0,"AAAA", new LightPostLocations("59.323008", "18.072767"));
		newLightPostWithInformation(lightPostRepository, stolpe, 
			new Information("Mårten Trotzigs Alley", "../assets/imgs/information/Stolpe5.1.png"));

		//Järnpojken
		stolpe = new LightPost(0,"AAAA", new LightPostLocations("59.325451", "18.072319"));
		newLightPostWithInformation(lightPostRepository, stolpe, 
			new Information("The Iron Boy", "../assets/imgs/information/Stolpe6.1.png"));

		//Nobel Museet
		stolpe = new LightPost(0,"AAAA", new LightPostLocations("59.325331", "18.070825"));
		newLightPostWithInformation(lightPostRepository, stolpe, 
			new Information("The Nobel Museeum", "../assets/imgs/information/Stolpe7.1.png"));

		//Gråmunkgränd 5
		stolpe = new LightPost(0,"AAAA", new LightPostLocations("59.325370", "18.068138"));
		newLightPostWithInformation(lightPostRepository,stolpe , 
			new Information("Gråmunkgränd 5", "../assets/imgs/information/Stolpe8.1.png"));

		//Apoteket Korpen
		stolpe = new LightPost(0,"AAAA", new LightPostLocations("59.325611", "18.068727"));
		newLightPostWithInformation(lightPostRepository, stolpe, 
			new Information("Apoteket Korpen", "../assets/imgs/information/Stolpe9.1.png"));
		newLightPostWithInformation(lightPostRepository, stolpe, new Information("Apoteket Korpen", "../assets/imgs/information/Stolpe9.2.png"));

		//Evert Taubes staty
		stolpe = new LightPost(0,"AAAA", new LightPostLocations("59.325236", "18.061392"));
		newLightPostWithInformation(lightPostRepository, stolpe,
			new Information("The Statue of Evert Taube", "../assets/imgs/information/Stolpe10.1.png"));
	}

	private void newLightPostWithInformation(LightPostRepository lightPostRepository, LightPost lightPost, Information information)
	{
		lightPost.addInformation(information);
		lightPostRepository.save(lightPost);


	}
}