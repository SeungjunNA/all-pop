package backend.allpop.service;

import backend.allpop.entity.Board;
import backend.allpop.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public byte[] getImageData(Long id){
        Optional<Board> optionalBoard = boardRepository.findById(id);

        if(optionalBoard.isPresent()){
            return Base64.getDecoder().decode(optionalBoard.get().getImage());
        }else{
            throw new RuntimeException("이미지를 찾을 수 없음");
        }
    }
//    public Board getImageData(Long id){
//        Optional<Board> optionalBoard = boardRepository.findById(id);
//        if(optionalBoard.isPresent()){
//            return optionalBoard.get();
//        }else{
//            throw new RuntimeException("이미지를 찾을 수 없음");
//        }
//    }

    public void saveImage(byte[] imageData){
        try {
            String encodedImageData = Base64.getEncoder().encodeToString(imageData);

            Board board = new Board();
            board.setImage(encodedImageData);

            boardRepository.save(board);
            System.out.println("이미지저장완료");
        }catch (Exception e){
            System.out.println("이미지 저장 실패 : " + e.getMessage());
        }
    }
}
