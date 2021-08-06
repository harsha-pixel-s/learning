
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Navbar from './Navbar.js';
import Skills from './Skills.js';
import Contact from './Contact.js';
import Queries from './Queries.js';

function App() {
 
  return (
    <div className="App">
    <Navbar />
  <div className="App-name" >
    <Home />

</div>
   <header className="App-header">
    
<About />
  
   </header>

<div className="Hobbies">

<Skills />

</div>
<div className="Inform">

  <Contact />

</div>
<div className="Queries">

<Queries />

</div>

 </div>

  );
}

export default App;
