
import './App.css';
import a from "./flouki.jpg";
import vaylili from './vaylili.mp4';
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title_red">majdi</h1>

<br />

<img src="./ivar.jpg" alt='aas' />

<br />

<img src={a} alt='a'/>

</div>

<video width="320" height="240" controls >

<source src={vaylili} type="video/mp4" />

</video>
<br/>
<video width="320" height="240" controls >

<source src="./vartolo.mp4"type="" />

</video>

    </div>
  );
}

export default App;
