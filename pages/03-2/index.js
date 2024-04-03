//  1) createBoard를 활용해, 게시물을 하나 등록해 주세요.
//  mutation{
//    createBoard(
    //  createBoardInput:{
    //    writer:"오진원",
    //    password:"123",
    //    title:"제목 입니다.",
    //    contents:"내용 입니다.",
 			// youtubeUrl:"http://ssss",
    //    boardAddress:{
        //  zipcode:"야",
        //  address:"나",
        //  addressDetail:"두"
    //    }
    //    images:"none"      
    //  }
//    ){
    //  _id
    //  writer
//    }
//  }
//  2) 등록한 게시글의 제목과 내용은 무엇인가요?
//  query{
//    fetchBoard(
    //  boardId:"660d2801bfc0f900299a90de"
//    ){
    //  title
    //  contents
//    }
//  }
//  3) 등록한 게시글에 좋아요를 1 올려주세요.
//  mutation{
//    likeBoard(boardId:"660d2801bfc0f900299a90de")
//  }
//  4) 등록한 게시글에 싫어요도 1 올려주세요.
//  mutation{
//    dislikeBoard(boardId:"660d2801bfc0f900299a90de")
//  }
//  5) 등록한 게시글의 좋아요와 싫어요는 각각 몇 개 인가요? (fetchBoard를 활용해서 확인해 보세요.)
//  query{
//    fetchBoard(boardId:"660d2801bfc0f900299a90de"){
    //  likeCount
    //  dislikeCount
//    }
//  }
//  6) 현재 등록된 게시글의 총 갯수는 몇 개 인가요? (어떤 API를 활용하면 좋을지 찾아보세요!)
//  query{
//    fetchBoardsCount
//  }
//  7) 등록한 게시글의 제목을 수정해 보세요!
//  mutation{
//    updateBoard(
    //  boardId:"660d2801bfc0f900299a90de",
    //  password:"123"
   	// updateBoardInput:{
    //    title:"수정한 제목",
    //  }
//    ){
    //  title
//    }
//  }
//  8) fetchBoards 전체 게시물 조회를 활용하여 방금 쓴 게시물을 검색해 보세요.(search 변수를 활용해요!)
//  query{
//    fetchBoards(
    //  search:"수정한 제목"
//    ){
    //  writer
    //  _id
//    }
//  }
//  9) 등록한 게시글에 댓글을 3개 추가해 보세요.
//  mutation{
//    likeBoard(boardId:"660d2801bfc0f900299a90de")
//  }
//  10) 첫번째 댓글의 내용을 수정해 보세요!
//  mutation{
//    createBoardComment(
    //  boardId:"660d2801bfc0f900299a90de",
    //  createBoardCommentInput:{
    //    writer:"김",
    //    password:"123",
    //    contents:"우와"
    //    rating:123
    //  }
//    ){
    //  writer
    //  rating
    //  _id
//    }
//  }

//  mutation{
//    updateBoardComment(
    //  boardCommentId:"660d2f3bbfc0f900299a90e1",
    //  password:"123",
   	// updateBoardCommentInput:{
    //    contents:"변경한 댓글",
    //    rating:13,
      
    //  }
//    ){
    //  _id
//    }
//  }
//  query{
//    fetchBoardComments(boardId:"660d2801bfc0f900299a90de"){
    //  writer
    //  contents
    //  rating
//    }
//  }

//  11) 두번째 댓글을 삭제해 보세요!
//  mutation{
//    deleteBoardComment(
    //  boardCommentId:"660d2f3bbfc0f900299a90e1"
    //  password:"123"
//    )
//  }

//  12) 등록한 게시글에 달려있는 모든 댓글을 조회해 보세요.(작성자와 내용만 조회합니다.)
//  query{
//    fetchBoardComments(boardId:"660d2801bfc0f900299a90de")
//    {
    //  writer
    //  contents
//    }
//  }

//  13) BEST게시글을 조회해 보세요! (API 이름을 잘 찾아보세요!)
//  query{
   	// fetchBoardsOfTheBest{
    //  writer
    //  likeCount
//    }
//  }
//  14) 회원가입을 해보세요! 사용자, 즉 User를 만드는 API입니다!
//  mutation{
//    createUser(createUserInput:{
    //  email:"asdklk@naver.com",
    //  password:"123123",
    //  name:"홍길동"
//    }){
    //  email
//    }
//  }