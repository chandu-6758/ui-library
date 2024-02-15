

import { init } from 'snabbdom/build/package/init';
import { h } from 'snabbdom/build/package/h';

let patch = init([]);

function createComponent(template, initialState, mountCallback, updateCallback) {
  let state = initialState;
  let vnode = null;

  function updateState(newState) {
    state = newState;
    updateView();
    updateCallback && updateCallback(state);
  }

  function updateView() {
    const newVnode = template({ state, updateState });
    vnode = patch(vnode, newVnode);
  }

  function mount(container) {
    vnode = patch(container, template({ state, updateState }));
    mountCallback && mountCallback();
  }

  return {
    mount,
    updateState,
  };
}

export { createComponent, h };
