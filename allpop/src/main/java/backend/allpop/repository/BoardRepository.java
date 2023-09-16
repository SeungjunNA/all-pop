package backend.allpop.repository;

import backend.allpop.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardRepository extends JpaRepository<Board, Long> {
    @Override
    Optional<Board> findById(Long id);
}
