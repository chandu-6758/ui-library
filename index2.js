import { createComponent, h } from 'ui-library';

function App() {
  let count = 0;

  const template = ({ state, updateState }) => {
    return h('div', [
      h('h1', state),
      h('button', { on: { click: () => updateState(state + 1) } }, 'Add'),
    ]);
  };

  const mountCallback = () => {
    console.log('Component mounted');
  };

  const updateCallback = (newState) => {
    console.log('State changed:', newState);
  };

  const appComponent = createComponent(template, count, mountCallback, updateCallback);
  const container = document.getElementById('app-container');

  appComponent.mount(container);
}

App();
