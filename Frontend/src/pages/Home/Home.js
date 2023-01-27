import React from "react";



function  Home(isAuth)  {
  if(isAuth){
    return (
      <div>Home user logged in</div>
    )
  } else {
    return (
      <div>Home no user</div>
    )
  }
}
export default Home;