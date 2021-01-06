import * as controlActions from './controlActions'
import * as calidadActions from './calidadActions'
import * as gdsActions from './gdsActions'
import * as comercialActions from './comercialActions'
import * as toActions from './toActions'
import * as eComActions from './eComActions'

const combinaActions = Object.assign({}, controlActions, calidadActions, gdsActions,comercialActions, toActions, eComActions);

export default combinaActions;