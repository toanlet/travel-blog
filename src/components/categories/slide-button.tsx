import { ReactComponent as TypeButton } from 'src/assets/icons/svg/next.svg';

interface SlideButtonProps {
  direction: string;
  handleAct: (type: string) => void;
  className?: string;
}
const SlideButton: React.FC<SlideButtonProps> = ({
  direction,
  handleAct,
  className,
}) => {
  return (
    <div className={className}>
      <TypeButton
        className={`slide-btn ${direction === 'next' ? 'next' : 'pre'}`}
        onClick={() => handleAct(direction)}
      ></TypeButton>
    </div>
  );
};

export default SlideButton;
