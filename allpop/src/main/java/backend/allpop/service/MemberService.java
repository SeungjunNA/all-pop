package backend.allpop.service;

import backend.allpop.dto.MemberDto;
import backend.allpop.entity.Member;
import backend.allpop.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public Member signup(MemberDto memberDto){
        Member member = memberDto.toEntity();
        return  memberRepository.save(member);
    }
    public boolean idCheck(String id){
        Member member = memberRepository.findById(id);
        return member == null;
    }
}
