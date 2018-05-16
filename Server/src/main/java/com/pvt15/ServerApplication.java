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
		LightPost stGoran = new LightPost(0,"FFFF", new LightPostLocations("59.325065", "18.073701"));
		newLightPostWithInformation(lightPostRepository,informationRepository,stGoran , new Information("St. George and the Dragon", "St. George and the Dragon is Sweden's most famous artworks. It was created in the late 1400s in order to manifest the Swedish regent Sten Sture the Elder (Sr.) victory over the Danish union king, " +
					"King Christian I of the Battle of Brunkeberg year 1471. The original wooden stands inside the Great Church and consecrated in 1489, while standing on Köpmantorget is a replica in " +
					"bronze and granite, which was inaugurated in 1912. It should we tell the artwork's history and background"));

		newLightPostWithInformation(lightPostRepository,informationRepository,stGoran, new Information("Mer Info", "Det här är ett test"));



		//Stortorget
		newLightPostWithInformation(lightPostRepository, informationRepository,
				new LightPost(0,"0000", new LightPostLocations("59.324956", "18.070806")),
				new Information("Stortorget", "Det här är Stortorget"));


		//Lilla nygatan 5
		newLightPostWithInformation(lightPostRepository,informationRepository,
				new LightPost(0,"F0F0", new LightPostLocations("59.324368", "18.067855")),
				new Information("Lilla Nygatan 5", "Loheskatten is a large silver treasure hidden around 1741 and found in 1937 in a store room here at Lilla Nygatan 5 in Gamla Stan, Stockholm. " +
				"The treasure, weighing 205 kg is the largest ever found in Sweden and is on display at Stockholm City Museum and the Royal Coin Cabinet. The former store room, today houses a hotel restaurant."));

		//Riddarholmen
		newLightPostWithInformation(lightPostRepository,informationRepository,new LightPost(0,"AAAA", new LightPostLocations("59.324752", "18.063964")), new Information("Riddarholmen", "Det här är Riddarholmen"));
	}

	private void newLightPostWithInformation(LightPostRepository lightPostRepository, InformationRepository informationRepository, LightPost lightPost, Information information)
	{
		lightPost.addInformation(information);
		lightPostRepository.save(lightPost);


	}
}