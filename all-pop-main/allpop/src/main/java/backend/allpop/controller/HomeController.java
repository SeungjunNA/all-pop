package backend.allpop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;
@Controller
public class HomeController {
    @GetMapping("hello")
    public List<String> hello(){
        return Arrays.asList("백엔드", "데이터 연동");
    }
}
