package backend.allpop.controller;

import backend.allpop.dto.MemberDto;
import backend.allpop.entity.Member;
import backend.allpop.repository.MemberRepository;
import backend.allpop.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@CrossOrigin("*")
public class MemberController {
    @Autowired
    private MemberService memberService;
    @Autowired
    private MemberRepository memberRepository;
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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody MemberDto memberDto){
        try {
            Optional<Member> optionalMember = memberRepository.findById(memberDto.getId());
            Member member = optionalMember.orElseGet(()-> new Member());
            if(member.getId()==null){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("아이디 없음");
            }else if (!member.getPassword().equals(memberDto.getPassword())){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("비밀번호 틀림");
            }
            return ResponseEntity.ok("로그인 성공");
        }catch (Exception e){
            System.out.println(5);
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
        }
    }
}
