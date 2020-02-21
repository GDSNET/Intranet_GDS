import * as controlActions from './controlActions'
import * as calidadActions from './calidadActions'
import * as gdsActions from './gdsActions'
import * as comercialActions from './comercialActions'

const combinaActions = Object.assign({}, controlActions, calidadActions, gdsActions,comercialActions);

export default combinaActions;