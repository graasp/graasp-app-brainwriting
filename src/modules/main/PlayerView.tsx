import { PLAYER_VIEW_CY } from '@/config/selectors';

import Ideation from '../inputResponse/Ideation';

const PlayerView = (): JSX.Element => (
  <div data-cy={PLAYER_VIEW_CY}>
    <Ideation />
  </div>
);

export default PlayerView;
