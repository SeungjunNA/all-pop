package backend.allpop.dto;

import backend.allpop.entity.Member;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MemberDto {
    Long idx;
    String id;
    String password;
    String username;
    String address;

    public Member toEntity(){
        return Member.builder()
                .idx(idx)
                .id(id)
                .password(password)
                .username(username)
                .address(address)
                .build();
    }
}
