import Header from "../Header";
import Player1 from "../Player/Player1";
import Player2 from "../Player/Player2";
import Winner from "../Winner";
import Reset from "../Reset";
import Form from "../Form";

const App = ({ info }) => !info ? (
<div> 
    <Header />
  
    <Form />
  
    </div>
) : (
    <div>
        <Header />
    <div className="row mb-4">
        <Player1 />
        <Player2 />
   </div>
        <Winner />
        <hr />
        <Reset />
    </div>
 );

  



export default App;
