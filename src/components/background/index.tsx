import './styles.scss';
import BG from 'src/assets/images/bg-1.png';
const Background: React.FC<any> = ({ children }) => {
  return (
    <div className="background">
      <div className="overlay">
        {' '}
        <img src={BG} alt="bg" className="img-bg" />
        <div className="slogan">
          {' '}
          <h1>Where will you go next?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quia eius adipisci laborum totam assumenda minima sunt doloremque
            fugiat corporis?
          </p>
          <h3 className="text-color">Let's Go....</h3>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Background;
