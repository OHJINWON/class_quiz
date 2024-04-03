//  1) 철수의 나이는 몇살인가요?(나이만 조회해 주세요.)
//  query{
//    fetchProfile(
//      name:"철수"
//    ){
//    	age
//    }
//  }
//  2) 영희의 학교는 어디인가요?(학교만 조회해 주세요.)
//  query{
//    fetchProfile(
//      name:"영희"
//    ){
//      school
//    }
//  }
//  3) 3번 게시글의 내용과 작성일이 무엇인가요?(내용과 작성일만 조회해 주세요.)
//  3번 게시글이 없어서 4번으로 찾음
//  query{
//    fetchBoard(number:4){
//      contents
//      createdAt
//    }
//  }
//  4) 본인의 이름으로 프로필을 작성해 보세요.
//  mutation{
//    createProfile(
//      name:"오진원",
//      age: 27,
//      school: "동성고등학교"
//    ){
//      _id
//      number
//      message
//    }
//  }
//  5) 본인의 이름으로 게시글을 작성해 보세요.
//  mutation{
//    createBoard(
//      writer:"오진원",
//      title:"제목입니다.",
//      contents:"만나서 반가워요."
//    ){
//      _id
//      number
//      message
//    }
//  }
//  6) 자신의 프로필을 조회해 보세요.
//  query{
//    fetchProfile(name:"오진원"){
//      number
//      name
//      age
//      school
//    }
//  }
//  7) 자신의 게시글을 조회해 보세요.
//  query{
//    fetchBoard(number:22953){
//      number
//      writer
//      title
//      contents
//    }
//  }
//  8) 본인의 프로필에서, 학교를 자신이 졸업한 초등학교로 바꿔보세요.
//  mutation{
//    updateProfile(
//      name:"오진원",
//    	school:"샘머리초등학교"
//    ){
//      _id
//    }
//  }
//  9) 본인의 게시글에서, 제목과 내용을 바꿔보세요.
//  mutation{
//    updateBoard(
//      number:22953,
//    	title:"수정제목",
//      contents:"수정내용"
//    ){
//      _id
//    }
//  }
//  10) 자신이 좋아하는 만화 주인공으로 프로필을 작성해 보세요.
//  mutation{
//    createProfile(name:"홍길동",age:22, school:"몰라")
//    {
//      _id
//    }
//  }
//  11) 위 10번에서 작성한 프로필을 삭제해 보세요.
//  mutation{
//    deleteProfile(name:"홍길동"){
//      message
//    }
//  }
//  12) 상품을 하나 만들어 보세요.
//  mutation{
//    createProduct(
//      seller:"오진원",
//      createProductInput:{
//        name:"바나나",
//        detail:"싱싱한 바나나",
//        price: 2000
//      }
//    ){
//      _id
//      number
//      message
//    }
//  }
//  13) 위 12번에서 만들었던 상품의 가격을 500원 인상해 보세요.
//  mutation{
//    updateProduct(
//      productId:"dff1b2bd-cdd8-4998-b0c8-23bd8b1c1f01",
//    	updateProductInput:{
//        price:2500
//      }
//    ){
//      number
//      message
//    }
//  }
//  14) 위에서 만든 상품을 조회하되, 가격만 조회해 보세요.
//  query{
//    fetchProduct(
//      productId:"dff1b2bd-cdd8-4998-b0c8-23bd8b1c1f01",
//    ){
//      price
//    }
//  }
//  15) 조회했던 상품을 삭제해 보세요.
//  mutation{
//    deleteProduct(
//      productId:"dff1b2bd-cdd8-4998-b0c8-23bd8b1c1f01"
//    ){
//      message
//    }
//  }
//  16) 삭제한 상품이 정말로 삭제되었는지 다시 한번 조회해 보세요.
//  query{
//    fetchProduct(
//      productId:"dff1b2bd-cdd8-4998-b0c8-23bd8b1c1f01",
//    ){
//    name
//    }
//  }
//  17) 게시물 목록 중, 2페이지를 조회해 보세요.
//  query{
//    fetchBoards(page:2)
//    {
//      number
//    }
//  }
//  18) 게시물 목록을 조회할 때, page를 입력하지 않으면, 어떤 결과가 발생하나요?
//  query{
//    fetchBoards(){
//      number
//    }
//  }
//  정답:아무것도 안나온다.
//  19) 게시물은 몇 개가 있나요?
//  query{
//    fetchProfilesCount
//  }
//  정답:1040
//  20) 게시물은 몇 개가 있나요?
//  query{
//    fetchBoardsCount
 
//  정답:1