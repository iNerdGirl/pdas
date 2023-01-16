import 'bulma/css/bulma.min.css';
import ProfileCard from "./Component/ProfileCard";
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import CortanaImage from './images/cortana.png';

function App() {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistants</p>
          <p className='subtitle'>Maybe not as smart as you think</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="I cost my daddy over $1 billion"/>
            </div>
            <div className='column is-4'>
              <ProfileCard title="Siri" handle="@siri01" image={SiriImage} description="Apple really doesn't want to talk about me anymore" />
            </div>
            <div className='column is-4'>
              <ProfileCard title="Cortana" handle="@cortana22" image={CortanaImage} description="Hi! I'm Cortana! A little wifi here and a little sign in there..." />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
