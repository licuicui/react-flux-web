import { Dispatcher } from 'flux'
import constants from 'ClientConstants/Constants'
import Action from 'Util/action'

const dispatcher = new Dispatcher()

function DispatcherFunc() {}

// Register callback with Dispatcher
DispatcherFunc.registerFunc = function (store) {
  store.disPatcherToken = Dispatcher.register(function (action) {
    const data = action.data
    if (typeOf(store[action.type]) === 'function') {
      store[action.type](data)
      store.emitChange()
    }
    return true
  })
}

// dispatcher task
DispatcherFunc.dispatcherTask = function (type, data) {
  Dispatcher.dispatch(new Action(constants[type], data))
}

const typeOf = (obj) => {
  const s = Object.prototype.toString.call(obj)
  return s.match(/\[object (.*?)\]/)[1].toLowerCase()
}

module.exports = DispatcherFunc
