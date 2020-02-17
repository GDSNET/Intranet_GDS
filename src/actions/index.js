import * as controlActions from './controlActions'
import * as calidadActions from './calidadActions'
import * as gdsActions from './gdsActions'

const combinaActions = Object.assign({}, controlActions, calidadActions, gdsActions);

export default combinaActions;