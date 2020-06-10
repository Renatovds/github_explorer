import styled from 'styled-components';


export const Header = styled.header`

  display:flex;
  align-items:center;
  justify-content:space-between;

 a {
   display:flex;
   text-decoration:none;
   color: #a8a8b3;
   margin-left:5px;
   align-items:center;
   transition:color 0.2s;

   &:hover{
    color: #666;
   }
 }


`;
export const RepositoryInfo = styled.section`


header{
  display:flex;
  margin-top:80px;
  align-items:center;

  img{
  height:120px;
  width:120px;
  border-radius:50%;

  }
  div{

    margin-left:24px;
  strong {
    color: #3d3d4d;
    font-size:36px

  }
  p{
    font-size:18px;
    color: #737380;
    margin-top:4px;
  }

}
}
ul{
  display:flex;
  list-style:none;
  margin-top:40px;

  li{

    & + li {
      margin-left:80px;
    }

    strong  {
      font-size:36px;
      display:block;
    }

    span{
      display:block;
      font-size:18px;
      color: #6c6c80;
      margin-top:4px;
    }


  }

}



`
export const Issues = styled.div`

margin-top:80px;
  max-width:700px;


  a {
    background-color:#fff;
    display:flex;
    align-content:center;
    border-radius:5px;
     width:100%;
     align-items:center;
     text-decoration:none;
     padding:24px;
     transition:transform 0.2s;

     &:hover{
       transform:translateX(10px);
     }

     & + a {
       margin-top:10px;
     }

  }

  div{
    margin-left:16px;

    strong{
      font-size:20px;
      color:#3d3d4d;
    }

    p {
      margin-top:10px;
      font-size:16px;
      color:#a8a8b3;

    }
  }

  svg{
    margin-left:auto;
    color:#a8a8b3;
    height:20px;
    width:20px;

  }



`
