import styled from "styled-components";

export const MenuForWheels = styled.nav `
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
.nav-item {
    margin: 0 15px;
}

.mobile-menu-icon {
    display: none;
}

.mobile-menu {
    display: none;
}
 
.logo {
    font-size: 25px;
    color: #222;
    text-decoration: none;
    font-weight: 600;
    opacity: 0;
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
    border-color: #eaeaea;
}
 
.social-media a i {
    font-size: 24px;
    color: #eaeaea;
    transform: rotate(-45deg);
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
 
`
