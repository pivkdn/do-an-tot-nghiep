const ADD = 'order@add'
const REMOVE = 'orde@remove'
const BAG = 'order@bag'
const ALL = 'order@all'

const addItem = (data) => {
    return {
        type: ADD,
        item: data
    }
}

const resetItem = () => {
    return {
        type: ALL
    }
}

const removeItem = (data) => {
    return {
        type: REMOVE,
        item: data
    }
}

export default {
    ADD,
    REMOVE,
    BAG,
    ALL,
    addItem,
    removeItem,
    resetItem
}