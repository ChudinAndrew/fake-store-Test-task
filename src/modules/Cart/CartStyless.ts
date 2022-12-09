import styled from "styled-components";



export const CartWrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:8px 0;
.price-trash{
    display:flex;
}
.img{
    padding-left:40px;
    height:50px;
}
.price{
    align-self: center;
    padding-right:40px;
    font-size:20px;
    float:right;
}
.trash{
    cursor: pointer;
    color:grey;
    padding-right:10px;
    transition: color, transform 500ms ease;
}

.trash:hover{
    color:red;
    transform: scale(1.5);
}
`