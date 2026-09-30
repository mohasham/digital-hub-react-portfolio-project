import { useScrollProgress } from '../../hooks/use-reveal';
import './scroll-progress.styles.scss';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span
        className="scroll-progress__bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};

export default ScrollProgress;
