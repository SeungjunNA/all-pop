package backend.allpop.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Entity
@Data
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idx;
    @Column(unique = true)
    String id;
    String password;
//    String username;
//    String address;
    Role role;
    @Builder
    public Member(Long idx, String id, String password){
        this.idx = idx;
        this.id = id;
        this.password = password;
//        this.username = username;
//        this.address = address;
        role = Role.USER;
    }
}
