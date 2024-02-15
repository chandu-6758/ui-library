# ui-library
Creating a UI library
Functionality of the UI Library:
1. Templating: Provide a method that allows users to define the template for the view to be rendered on the screen. Template should be a function which has inputs like state, props
and return a Virtual Node. (This method should be generic not specifically coded for the below outcome).
2. Reactivity: Implement a method named updateState that can be utilized to modify the
internal state of the application and automatically update the view. Importantly, this method should be designed to be callable within the Template function (ex, a button to call
handleClick function which increments state using updateState). The events listeners should be handled directly using the snabbdom library rather than adding them using addEventListener.
3. Life Cycle Events: Incorporate a lifecycle mechanism into the UI library. Detect when a component is mounted and provide the capability to execute functions when necessary. This is analogous to the useEffect function in React.
Steps:
1. Create a new Lerna monorepo
2. Create a UI library package
3. Install necessary dependencies in the UI library package
4. Implement the UI library functionality in packages/ui-library/src/index.js
5. Create a sample application in packages/app/src/index2.js
6. Update packages/app/package.json to include "start": "node src/index.js" in the scripts section.
7.Create an HTML file (packages/app/index.html) with a container element
Open your browser and navigate to http://localhost:8000 (or the specified port). You should see the simple web page with an h1 tag and a button. The console logs for mounting and state change events should appear in the browser's console when you interact with the button.
