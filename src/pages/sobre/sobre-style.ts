import styled from "styled-components";


export const SobreDiv = styled.div`

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,600;0,700;1,300;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
body{
    background-color: #f2f2f2;
}


/*Header Style*/
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 8%;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }
  
  .logo {
    font-size: 25px;
    color: #222;
    text-decoration: none;
    font-weight: 600;
    animation: slideRight 1s ease forwards;
  }
  
  .navbar a {
    display: inline-block;
    font-size: 18px;
    color: #222;
    text-decoration: none;
    font-weight: 500;
    margin: 0 20px;
    transition: .3s;
    animation: slideTop .5s ease forwards;
    animation-delay: calc(.2s *var(--i));
  }
  
  .navbar a:hover,
  .navbar a.active {
    color: #1743e3;
  }
  
  .social-media {
    display: flex;
    justify-content: space-between;
    width: 150px;
    height: 40px;
  }
  
  .social-media a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid transparent;
    text-decoration: none;
    transform: rotate(45deg);
    transition: .5s;
    animation: slideSci .5s ease forwards;
    animation-delay: calc(.2s *var(--i));
  }
  
  .social-media a:hover{
    border-color: #000000;
  }
  
  .social-media a i {
    font-size: 24px;
    color: #000000;
    transform: rotate(-45deg);
  }
  
.heading{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 10rem auto;
}
.heading h1 {
    font-size: 50px;
    color: #000;
    margin-bottom: 25px;
    position: relative;
}
.heading h1::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    display: block;
    margin: 0 auto;
    background-color: #1743e3;
}
.heading p{
    font-size: 18px;
    color: #666;
    margin-bottom: 35px;
}
.container{
    width: 90%;
    margin: 0 auto;
    padding: 10px 20px;
}
.about {
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-wrap: wrap;
    height: 100vh; 
}
.about-image{
    flex: 1;
    margin-right: 40px;
    overflow: hidden;
}
.about-image:hover img{
    transform: scale(1.2);
}
.about-image img{
    max-width: 100%;
    height: auto;
    display: block;
    transition: 0.5s ease;
}
.about-content{
    flex: 1;
}
.about-content h2{
    font-size: 23px;
    margin-bottom: 15px;
    color: #333;
}
.about-content p{
    font-size: 18px;
    line-height: 1.5;
    color: #666;
}
.about-content .read-more{
    display: inline-block;
    padding: 10px 20px;
    background-color: #1743e3;
    color: #fff;
    font-size: 19px;
    text-decoration: none;
    border-radius: 25px;
    margin-top: 15px;
    transition: 0.3s ease;
}
.about-content .read-more:hover{
    background-color: #4070f4;
}
@media screen and (max-width: 768px){
    .heading{
        padding: 0px 20px;
    }
    .heading h1{
        font-size: 36px;
    }
    .heading p{
        font-size: 17px;
        margin-bottom: 0px;
    }
    .container{
        padding-left: 0px;
    }
    .about{
        padding: 20px;
        flex-direction: column;
    }
    .about-image{
        margin-right: 0px;
        margin-bottom: 20px;
    }
    .about-content p{
        padding: 0px;
        font-size: 16px;
    }
    .about-content .read-more{
        font-size: 16px;
    }
}
    
`