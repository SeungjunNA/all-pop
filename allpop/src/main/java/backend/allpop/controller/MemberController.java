package backend.allpop.controller;

import backend.allpop.dto.MemberDto;
import backend.allpop.entity.Member;
import backend.allpop.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/member")
public class MemberController {
    private MemberService memberService;
    @GetMapping("/signup")
    public String signupForm(){
        return "signup";
    }
    @PostMapping("/signup")
    public String Signup(MemberDto memberDto){
        try{
            memberService.signup(memberDto);
        }catch (Exception e){
            e.printStackTrace();
        }
        return "redirect:/";
    }

    @PostMapping("signup/idCheck")
    public ResponseEntity<String> checkId(@RequestBody String id){
        if(memberService.idCheck(id)){
            return ResponseEntity.ok("사용 가능한 아이디");
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body("이미 존재하는 아이디");
    }

    @GetMapping("/login")
    public String loginForm(){
        return "login";
    }
}
