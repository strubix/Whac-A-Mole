import 'bootstrap';
import './assets/css/style.scss';

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('./assets/svg', true, /\.svg/));

import './whacamole'
