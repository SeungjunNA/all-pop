package backend.allpop.dto;

import backend.allpop.entity.Member;
import backend.allpop.entity.Role;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MemberDto {
    Long idx;
    String id;
    String password;
    String name;
//    String address;

    public Member toEntity(){
        return Member.builder()
                .idx(idx)
                .id(id)
                .password(password)
                .name(name)
//                .address(address)
                .build();
    }
}
