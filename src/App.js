import React from 'react';
import Profile from './profile/Profile'
import Picture from './Picture/mandela.jpg'


function App() {
  return (
    <div className="App">
      <Profile fullName="Nelson Mandela" bio=" born July 18 and died on December 5 2013 in Johannesburg is a South African statesman.he was one of the historic leaders in the struggle against the institutional political system of racial segregation  before becoming President of the Republic of South Afr." profession="President of the Republic of South Africa">
        <img
          className="imgProfile"
          src={Picture}
          alt="Nelson Mandela"
          height={"500px"}
          width={"800px"}
        />
      </Profile>
    </div>
  );
}

export default App;
