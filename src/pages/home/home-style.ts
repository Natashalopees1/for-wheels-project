import styled from "styled-components";

export const HomeDiv = styled.div`
.home {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 8% 0;
    overflow: hidden;
}
 
.home-content {
    max-width: 630px;
}
 
.home-content h1 {
    font-size: 50px;
    line-height: 1.2;
    opacity: 0;
    animation: slideBottom 1s ease forwards;
    animation-delay: 1s;
}
 
.home-content h3 {
    font-size: 40px;
    color: #1743e3;
    opacity: 0;
    animation: slideRight 1s ease forwards;
    animation-delay: 1.3s;
}
 
.home-content p {
    font-size: 16px;
    margin: 15px 0 30px;
    opacity: 0;
    animation: slideLeft 1s ease forwards;
    animation-delay: 1.6s;
}
 
.btn {
    display: inline-block;
    padding: 10px 20px;
    background: #1743e3;
    border: 2px solid #1743e3;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    font-size: 16px;
    color: #eaeaea;
    letter-spacing: 1px;
    text-decoration: none;
    font-weight: 600;
    transition: .5s;
    opacity: 0;
    animation: slideTop 1s ease forwards;
    animation-delay: 2s;
}
 
.btn:hover {
    background: transparent;
    color: #1743e3;
}
 
.home-img {
    position: relative;
    right: -7%;
    width: 450px;
    height: 450px;
    transform: rotate(45deg);
}
 
.home-img .rhombus {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #eaeaea;
    border: 25px solid #1743e3;
    box-shadow: -15px 15px 15px rgba(0, 0, 0, .2);
    opacity: 0;
    animation: zoomOut 1s ease forwards;
    animation-delay: 1.6s;
}
 
.home-img .rhombus img {
    position: absolute;
    top: 110px;
    left: -200px;
    max-width: 750px;
    transform: rotate(-45deg);
    opacity: 0;
    animation: car 1s ease forwards;
    animation-delay: 2s;
}
 
.home .rhombus2 {
    position: absolute;
    top: -25%;
    right: -25%;
    width: 700px;
    height: 700px;
    background: #1743e3;
    transform: rotate(45deg);
    z-index: -1;
    opacity: 0;
    animation: rhombus2 1s ease forwards;
}
 
 
@keyframes slideRight {
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
 
@keyframes slideLeft {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
 
@keyframes slideTop {
    0% {
        transform: translateY(100px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
 
@keyframes slideBottom {
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
 
@keyframes slideSci {
    0% {
        transform: translateX(100px) rotate(45deg);
        opacity: 0;
    }
    100% {
        transform: translateX(0) rotate(45deg);
        opacity: 1;
    }
}
 
@keyframes zoomOut {
    0% {
        transform: scale(1.1);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
 
@keyframes car {
    0% {
        transform: translate(300px, -300px) scale(0) rotate(-45deg);
        opacity: 0;
    }
    100% {
        transform: translate(0, 0) scale(1) rotate(-45deg);
        opacity: 1;
    }
}
 
 
@keyframes rhombus2 {
    0% {
        right: -40%;
        opacity: 0;
    }
    100% {
        right: -25%;
        opacity: 1;
    }
}
 
.menu{
    position: relative;
    border: 3px solid #cdcdcd;
}
 
.menu .menu-lines, .menu input{
    display: none;
}
 
.menu ul{
    display: flex;
    justify-content: center;
}
 
.menu ul li a{
    text-decoration: none;
    display: block;
    padding: 10px 20px;
    margin: 0px 10px;
    font-size: 1.5rem;
    color: #cdcdcd;
}
.menu ul li a:hover{
    background-color: #cdcdcd;
    color: #222;
}
 
main{
    border: 3px solid #cdcdcd;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);
    grid-template-areas:
    'sec2   sec1   sec1   sec3'
    'art1   art1   art2   art2'
    ;
    
}
 
section, article, footer{
    padding: 15px;
    display: flex;
    border: 3px solid #cdcdcd;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    
}
 
.sec1{grid-area: sec1;}
.sec2{grid-area: sec2;}
.sec3{grid-area: sec3;}
.art1{grid-area: art1;}
.art2{grid-area: art2;}
 
 
 
@media screen and (max-width: 620px){
    
    .car-img {
        display: none;
    }
    .rhombus {
        display: none;
    }
    .icon {
        position: fixed;
        z-index: 99;
    }
    .nav {
        margin-top: 75px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .nav-item {
        text-decoration: none;
        color: white;
    }
    .navbar {
        display: none;
    }
    .mobile-menu-icon {
        display: flex;
    }
    .mobile-menu-icon button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .mobile-menu ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 1rem;
    }
    .mobile-menu .nav-item {
        display: block;
        padding-top: 1.2rem;
    }
    .mobile-menu .login-button {
        display: block;
        padding: 1rem 2rem;
    }
    .mobile-menu .login-button button {
        width: 100%;
    }
    .open {
        display: flex;
        height: 100%;
        background: #1743e3;
        position: inherit;
        bottom: 0;
        right: 0;
        width: 280px;
        z-index: 0;
        flex-direction: column;
    }
    .social-media {
        display: none;
    }
    .name-enterprise{
        color: black !important;
    }
 
    main{
        border: 3px solid #cdcdcd;
        flex-grow: 1;
        display: grid;
        grid-template-columns: repeat(auto-fit, 1fr);
        grid-template-areas:
        'sec1'
        'sec2'
        'art1   art1   art2   art2'
        ;
        
    }
}

`
