import ACTION from '../constant'

const initialState = {
    persons: []
}

export default function (preState = initialState, action) {
    const { type, data } = action
    switch (type) {
        case ACTION.PERSON_ADD:
            return {
                persons: [data, ...preState.persons]
            }
        default:
            return preState
    }
}