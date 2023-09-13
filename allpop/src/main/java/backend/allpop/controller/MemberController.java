package backend.allpop.controller;

import backend.allpop.dto.MemberDto;
import backend.allpop.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("*")
public class MemberController {
    @Autowired
    private MemberService memberService;
    @GetMapping("/signup")
    public String signupForm(){
        return "signup";
    }
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody MemberDto memberDto){
        try {
//            if(memberService.idCheck(memberDto.getId())) {
//                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("이미 존재하는 아이디");
//            }
            memberService.signup(memberDto);
            return ResponseEntity.ok("회원가입 성공");
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("이미있는 아이디");
        }
    }

    @GetMapping("/login")
    public String loginForm(){
        return "login";
    }
}
