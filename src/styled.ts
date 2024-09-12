import styled from "styled-components";

export const HeaderNav = styled.div`
  header {
    position: static;
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
  .mobile-menu-icon .icon {
    width: 36px;
    height: 36px;
  }

  .nav-item {
    margin: 0 15px;
  }

  .mobile-menu-icon {
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

   a {
    display: inline-block;
    font-size: 18px;
    color: #222;
    text-decoration: none;
    font-weight: 500;
    margin: 0 20px;
    transition: 0.3s;
    animation: slideTop 0.5s ease forwards;
    animation-delay: calc(0.2s * var(--i));
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
    transition: 0.5s;
    animation: slideSci 0.5s ease forwards;
    animation-delay: calc(0.2s * var(--i));
  }

  .social-media a:hover {
    border-color: black;
  }

  .social-media a i {
    font-size: 24px;
    color: black;
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

  .menu {
    position: relative;
    border: 3px solid #cdcdcd;
  }

  .menu .menu-lines,
  .menu input {
    display: none;
  }

  .menu ul {
    display: flex;
    justify-content: center;
  }

  .menu ul li a {
    text-decoration: none;
    display: block;
    padding: 10px 20px;
    margin: 0px 10px;
    font-size: 1.5rem;
    color: #cdcdcd;
  }

  .menu ul li a:hover {
    background-color: #cdcdcd;
    color: #222;
  }

  .nav-item {
    margin: 0 15px;
  }



  @media (max-width: 1120px) {
    .mobile-menu {
    display: none;
}
    header {
      position: fixed;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    .rhombus {
      display: none;
    }
    .car-img {
      display: none;
    }
    .icon {
      position: fixed;
      z-index: 99;
    }
    .navbar {
      margin-top: 75px;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
    .nav-item {
      text-decoration: none;
      color: white;
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
    .name-enterprise {
      color: black !important;
    }
  }
`;
