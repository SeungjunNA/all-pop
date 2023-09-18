package backend.allpop.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idx;
    @Column(unique = true)
    String id;
    String password;
    String name;
//    String address;
//    Role role;
    @Builder
    public Member(Long idx, String id, String password, String name) {
        this.idx = idx;
        this.id = id;
        this.password = password;
        this.name = name;
//        this.address = address;
//        role = Role.USER;
    }
}
