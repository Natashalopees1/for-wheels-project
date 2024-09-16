import styled from "styled-components";


export const ContatoDiv = styled.div`

* {

}

.container{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item{
    width: 100%;
    height: 600px;
    max-width: 820px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 20px 10px rgba(0,0,0,.4);
    overflow: hidden;
    grid-template-columns: repeat(2, 1fr);
    display: grid;
}

.contato{
    background: #fff;
}

.enviar-para{
    background: #1743e3;
}

.first-text{
    padding-left: 20px;
    padding-top: 20px;
    font-size: 35px;
    color: #1743e3;
    font-weight: 600;
    text-transform: capitalize;
}

.logo-image{
    height: 360px;
    width: 360px;
}

.social-media1{
    display: flex;
    list-style: none;
}

ul li{
    padding-left: 15px;
    font-size: 24px;
    margin-top: 10px;
}

i{
    background: #1743e3;
    padding: 5px;
    border-radius: 5px;
    transition: .3s;
    color: #fff;
}

.social-media1 i:hover{
    background: #fff;
    color: #1743e3;
}

.secnd-text{
    font-weight: 500;
    color: #1743e3;
    padding-left: 20px;
}

.third-text{
    font-size: 25px;
    position: relative;
    top: 20px;
    left: 20px;
    padding-top: 10px;
    color: #fff;
}

form{
    padding: 0 50px;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.input-box{
    height: 40px;
    width: 70%;
    margin: 30px 0;
    position: relative;
}

.input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 20px;
    outline: none;
    padding-left: 10px;
    color: #fff;
    font-size: 16px;
}

.input-box label{
    position: absolute;
    top: 50%;
    left: 10px;
    padding-left: 10px;
    transform: translateY(-50%);
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    transition: .3s;
}

.input-box .input:focus ~ label,
.input-box .input:valid ~ label{
    top: -1px;
    left: 10px;
    background: #1743e3;
    font-weight: 500;
    font-size: 12px;
    padding: 5px;
}

textarea.input{
    resize: none;
    min-height: 150px;
    overflow: auto;
    padding-top: 10px;
}

.btn
{
    position: relative;
    top: 100px;
    background: #fff;
    outline: none;
    border: none;
    border-radius: 4px;
    height: 45px;
    width: 30%;
    font-size: 16px;
    color: #1743e3;
    cursor: pointer;
    font-weight: 500;
}

@media(max-width:850px){
    .item{
        grid-template-columns: 1fr;
    }
    .contato{
        display: none;
    }
    .text{
        font-size: 40px;
        text-align: center;
    }
    .btn{
        width: 25%;
        height: 40px;
        font-size: 12px;
    }
}
@media(max-width:400px){
    .item{
        grid-template-columns: 1fr;
    }
    .contato{
        display: none;
    }
    .text{
        font-size: 20px;
        text-align: center;
    }
    .btn{
        width: 20%;
        height: 40px;
        font-size: 12px;
    }
}
`
