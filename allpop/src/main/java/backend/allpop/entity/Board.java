package backend.allpop.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String image;
    String title;
    String location;
    Long likes;
}
