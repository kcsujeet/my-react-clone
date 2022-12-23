import { createElement, render } from './Utils'

let _states = []
let statesIdx = 0

let _deps = []
let depsIdx = 0

let _refs = []
let refIndex = 0

export const useState = (initState) => {
    _states[statesIdx] = _states[statesIdx] || initState;
    let myIndex = statesIdx
    const setState = (newState, callback=null) => {
        _states[myIndex] = newState;
        if(callback) {
            callback()
        }
    }
    statesIdx++
    return [_states[myIndex], setState]
}


export const useEffect = (cb, depArray) => {
    const oldDeps = _deps[depsIdx]
    let hasChanged = true


    if (oldDeps) {
        hasChanged = _deps ? !depArray.every((el, i) => el === _deps[i]) : true
    }


    if (hasChanged) {
        cb()
    }

    _deps[depsIdx] = depArray
    depsIdx++
}

export const useRef = (val) => {
    const myIndex = refIndex
    if(!_refs[myIndex]) {
        _refs[myIndex] = { current: val }
        refIndex++
    }
    return _refs[myIndex]
}

function workLoop () {
    statesIdx = 0
    depsIdx = 0
    refIndex = 0
    render(_states, _deps)()
    setTimeout(workLoop, 300)
}

setTimeout(workLoop, 100)

export default { render: render(_states, _deps), createElement }
