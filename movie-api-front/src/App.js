const React = require('react');
const { useState, useEffect } = require('react');
require('./App.css');
const api = require('./api/axiosConfig.js');


function App() {
     
  const [movies, setMovies] = useState();

  const getMovies = async () =>{

    try
    {

      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);

    } 
    catch(err){
      console.log(err);
    }


  }

  useEffect(() => {
   getMovies();
  },[])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
