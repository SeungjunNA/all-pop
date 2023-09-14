package backend.allpop.service;

import backend.allpop.dto.MemberDto;
import backend.allpop.entity.Member;
import backend.allpop.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public Member signup(MemberDto memberDto){
        Member member = memberDto.toEntity();
        return  memberRepository.save(member);
    }
//    public boolean idCheck(String id){
//        Optional<Member> member = memberRepository.findById(id);
//        return member.isPresent();
//    }
}
