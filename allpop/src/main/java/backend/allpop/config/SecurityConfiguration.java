//package backend.allpop.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfiguration {
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
//        http.authorizeRequests(customizer->{
//            customizer
//                    .requestMatchers("/", "/login", "/sign").permitAll()
//                    .requestMatchers("/myinfo").authenticated()
//                    .anyRequest().authenticated();
//        });
//        http.formLogin(customizer->{
//            customizer
//                    .loginPage("/login")
//                    .successForwardUrl("/")
//                    .failureUrl("/login");
//        });
//        http.logout(customizer->{
//            customizer
//                    .logoutUrl("/logout")
//                    .logoutSuccessUrl("/");
//        });
//        return http.build();
//    }
//}
