import * as controlActions from './controlActions'
import * as calidadActions from './calidadActions'
import * as gdsActions from './gdsActions'
import * as comercialActions from './comercialActions'
import * as toActions from './toActions'

const combinaActions = Object.assign({}, controlActions, calidadActions, gdsActions,comercialActions, toActions);

export default combinaActions;