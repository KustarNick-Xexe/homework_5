import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Image from './components/Image';
import Body from './components/Body';

function App() {
  return (
    <>
      <Card>
        <Image src = "http://placehold.it/300x200/"/>
        <Body 
          title = "Card title" 
          text = "Some quick example text to build on the card title and make up the bulk of the card's content."
        />
      </Card>
      <br/>
      <br/>
      <Card>
        <Body 
          title = "Special title treatment" 
          text = "With supporting text below as a natural lead-in to additional content."
        />
      </Card>
    </>
  );
}

export default App;
