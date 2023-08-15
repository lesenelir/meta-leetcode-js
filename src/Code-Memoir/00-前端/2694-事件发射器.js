class EventEmitter {
  constructor() {
    this.emitterObj = {} // key: event, value: [...callback]
  }

  subscribe(event, cb) {
    const flag = this.emitterObj[event] !== undefined
    if (!flag) this.emitterObj[event] = []

    this.emitterObj[event].push(cb)
    return {
      unsubscribe: () => {
        this.emitterObj[event].shift()
      }
    }
  }

  emit(event, args = []) {
    let res = []

    const flag = this.emitterObj[event] !== undefined
    if (!flag) return []

    this.emitterObj[event].forEach((item) => res.push(item(...args)))

    return res
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
