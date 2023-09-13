package backend.allpop.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig{

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .authorizeHttpRequests(customizer->{
                    customizer
                            .requestMatchers("/").permitAll()
                            .anyRequest().authenticated();
                });
        http
                .formLogin(customizer->{
                    customizer
                            .loginPage("/member/login")
                            .defaultSuccessUrl("/")
                            .failureUrl("/member/login")
                            .permitAll();
                });
        http
                .logout(customizer->{
                    customizer
                            .logoutUrl("/member/logout")
                            .logoutSuccessUrl("/")
                            .invalidateHttpSession(true);
                });

    return http.build();
    }

}