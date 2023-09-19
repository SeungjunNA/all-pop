package backend.allpop.controller;

import backend.allpop.entity.Board;
import backend.allpop.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.util.List;

@Controller
@CrossOrigin("*")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping("/")
    public ResponseEntity<byte[]> home(@RequestParam("id") Long id) {
        byte[] imageData = boardService.getImageData(id);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);

        return new ResponseEntity<>(imageData, headers, HttpStatus.OK);
    }

    @GetMapping("/boards")
    public ResponseEntity<List<Board>> getAllBoards(){
        List<Board> boards = boardService.getAllBoardData();

        return new ResponseEntity<>(boards, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file){
        try{
            String imagePath = "C:\\Users\\User\\OneDrive\\사진\\allpop이미지" + file.getOriginalFilename();
            File imageFile = new File(imagePath);
            file.transferTo(imageFile);

            byte[] imageData = Files.readAllBytes(imageFile.toPath());
            boardService.saveImage(imageData);
            return ResponseEntity.ok("이미지 저장 성공");
        }catch (Exception e){

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("이미지 저장 실패 : " +  e.getMessage());
        }
    }
}