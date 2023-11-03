<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->

The structure of Sankey diagram data is largely composed of node properties and link properties. An example organization of the properties of a node into data is presented below.

nodes: [
// Node defining the sub-elements that constitute the taxonomy
{name: ’person’, type: ’Target’,
subtype: ’0’, number: 0},

// Node defining the collected 60 sentiment visualization cases
{name: ’CAA20’, type: ’Paper’, number: 100},
],
The attributes of a node constitute data items with sub-elements constituting a taxonomy for study cases. Specifically, “name” denotes the name of the node, “type” denotes the five categories constituting the taxonomy,

“subtype” denotes the middle classification and sub-elements in the form of an index, and “number” is set to be shared with the source and target of the link data. Numbers are assigned in the following manner: person is 0, behavior is 1, psychology is 2, etc. After 100, numbers are assigned to the collected studies.
An example of organizing the link data of the Sankey diagram is presented below.
links: [
{source: 60, target: 89,
value: 1, linkId: [’Geometry’], process: ’KSBK15_7’},
],
Here, the starting node index number is expressed as “source” whereas the ending node index number is expressed as “target.” In the source and target parts, the sub-elements of the taxonomy given by the attribute data of the node and the number of study cases are entered. The amount of movement of each connectivity is expressed as a value. Along with data items for visualization elements, linkId—a variable for categorizing representative types of visual metaphors—is manually added to generate data. When categorizing each type, classification and organization are performed according to the characteristics of the target and the representation. In the exploration system, the corresponding types are labeled “target theme” and “representation theme,” respectively. To manage the visual metaphors appearing in each case independently of each other, process variables are added to configure the data. Each process variable is of the format “study title-number of visual metaphors appearing.”
