import { FallingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <FallingLines
        color="rgb(200, 51, 230)"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
}