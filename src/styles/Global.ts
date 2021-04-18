import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

:root{
    --primary: #26211B;
    --secondary: #342F28;
    --btn-color:#F2D8B5;
    --card-color:#F0F0F5;
    
    --screen-size: 1200px;

    
}

 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
 }
 html {
  font-size: 62.5%;


}

 body{
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    overflow-x:hidden;
    background-color:#FFFBF7;
   
    
 }

 button{
    cursor: pointer;
    
 }


 
`
