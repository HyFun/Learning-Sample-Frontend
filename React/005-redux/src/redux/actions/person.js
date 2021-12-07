import action from '../../redux/constant'

export const createAddPersonAction = (person) => ({ type: action.PERSON_ADD, data: person })