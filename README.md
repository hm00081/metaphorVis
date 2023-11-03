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

# Visualization Overview

![Main(alt text)](https://github.com/hm00081/metaphorVis/blob/main/images/Main.jpg)

## MetaphorVis

(a) Network View,
(b) Sankey Diagram View,
(c) Paper View

# Abstract

In the field of data visualization, there has been a recent trend of using a complex type of visualization with a multidimensional structure or using several visualizations in parallel when summarizing the results of sentiment analysis. Although this trend may be useful for sophisticated sentiment analysis, such analysis is difficult for the general public and novice researchers. To address this issue, there has recently been a trend of visualizing sentiments using visual metaphors. To facilitate the understanding of related cases, it is necessary to have a systematic means of grasping the sentiment target, the purpose and motivation of research, and the representations used as substitutes for visual metaphors. Therefore, the objective of the present study was to develop an exploration system that can analyze the visual metaphors used in the case of sentiment visualization. For this study, 1) sentiment visualization cases in which visual metaphors are used were collected. 2) After a taxonomy composed of the categories of “target, intermediation, representation, visual variable, and visualization technique” was constructed, it was used to analyze sentences of visual metaphors appearing in sentiment visualization cases. 3) An exploration system capable of grasping the semantic relationships of sub-elements within the five categories of the taxonomy and intuitively interpreting visual metaphors was developed so that appropriate cases can be recommended to sentiment visualization researchers. 4) The approach and usefulness of the exploration system were explained using user scenarios. 5) A case study was conducted to show that the provided system can be analyzed from various perspectives. 6) The usability of the exploration system was demonstrated through a verification targeting experts. The proposed system allows researchers and analysts to intuitively grasp “what types of visual metaphor method and idea should be equipped to visualize sentiment data in an easier way to understand.”

## Keywords

Sentiment analysis, Sentiment visualization, Visual metaphor, Taxonomy, Exploration system

# Sankey Diagram Node, Link Data Structure

The structure of Sankey diagram data is largely composed of node properties and link properties. An example organization of the properties of a node into data is presented below.

## Node defining the sub-elements that constitute the taxonomy

nodes: [
{name: ’person’,
type: ’Target’,
subtype: ’0’,
number: 0
},

## Node defining the collected 60 sentiment visualization cases

{name: ’CAA20’,
type: ’Paper’,
number: 100
} ...
]

The attributes of a node constitute data items with sub-elements constituting a taxonomy for study cases. Specifically, “name” denotes the name of the node, “type” denotes the five categories constituting the taxonomy,

“subtype” denotes the middle classification and sub-elements in the form of an index, and “number” is set to be shared with the source and target of the link data. Numbers are assigned in the following manner: person is 0, behavior is 1, psychology is 2, etc. After 100, numbers are assigned to the collected studies.
An example of organizing the link data of the Sankey diagram is presented below.

links: [
{
source: 60,
target: 89,
value: 1,
linkId: [’Geometry’],
process: ’KSBK15_7’
} ...
]

Here, the starting node index number is expressed as “source” whereas the ending node index number is expressed as “target.” In the source and target parts, the sub-elements of the taxonomy given by the attribute data of the node and the number of study cases are entered. The amount of movement of each connectivity is expressed as a value. Along with data items for visualization elements, linkId—a variable for categorizing representative types of visual metaphors—is manually added to generate data. When categorizing each type, classification and organization are performed according to the characteristics of the target and the representation. In the exploration system, the corresponding types are labeled “target theme” and “representation theme,” respectively. To manage the visual metaphors appearing in each case independently of each other, process variables are added to configure the data. Each process variable is of the format “study title-number of visual metaphors appearing.”

![Fig13(alt text)](https://github.com/hm00081/metaphorVis/blob/main/images/Fig13.jpg)
Figure 13 shows all the links connected to the corresponding node when the “opinion summarization” node is clicked on each axis of the Sankey diagram. Here, the colored links represent visual metaphors that have the intermediation of “summary of opinions.” In this study, to make the visual metaphor appear naturally connected, as shown in Figure 13, when a node or link is selected, all links related to the selected part are located at the top of the node.

Moreover, the coloring interaction is improved by using the “traceable multi-level feature” to display the entire link of metaphors related to the selected option when the user selects the desired link.
Related functions are presented in Algorithms B and C.

![Fig14(alt text)](https://github.com/hm00081/metaphorVis/blob/main/images/Fig14.jpg)

Figure 14 shows how all the links in the visual metaphor related to the clicked link are colored when one link is clicked in a certain section. The same filtering interaction is applied when a node in the Sankey diagram is clicked. Applying the two methods shown in Figures 13 and 14 allows for the entire data flow to be traced, even in a Sankey diagram with multiple axes.
In the link object information introduced in Algorithms A–C, along with the source and target connecting nodes as well as the value that determines the thickness, the linkId values for finding the same metaphor theme, the variable process that shares the same link, etc. are stored. It is possible to extract conditional information from corresponding object variables and create a recursive function that tracks related links. The principle of each algorithm is described below.

## Working principle of Algorithm A:

This algorithm conducts its exploration through the linkGroup, which is the entire link set, and it searches colorGroup as coloredLinkGroup to find a value that satisfies the condition. In the for-loop statement, this algorithm determines whether links having the same linkId values as the linkId of the wantLink link exist in the linkGroup to which the color is assigned, and this information is pushed to the empty
array coloredLinkGroup. Conversely, for the part that is not assigned a color, the link information is managed via pushing to the uncoloredLinkGroup. The sorting of the two link arrays is performed once more through the presence or absence of color as well as in the order of link index numbers. The CSS property z-index is used for color presence determination and position alignment.

![Algorithm A(alt text)](https://github.com/hm00081/metaphorVis/blob/main/images/AlgorithmA.jpg)

## Working principles of Algorithms B and C:

When an interaction event between Sankey diagram elements occurs, Algorithm B—which tracks nodes and links that have the same metaphor—is triggered. Algorithm C is a recursive function that traces the same metaphor on each axis (study case, target, intermediation, representation, visual variable, visualization technique) in the Sankey diagram when Algorithm B operates.
In Algorithm C, if the front axis exists for the source of the selected link. the findFrontLink condition determines whether the target attribute of the link and the source part of the selected link match. If there is a back axis for the target of the selected link, the findBackLink condition determines whether the source attribute of the link and the target part of the selected link match. This serves to find the same metaphors as the links to which the interaction is applied. By applying this function to Algorithm B, the entire link information can be tracked across multiple axes.

![Algorithm B(alt text)](https://github.com/hm00081/metaphorVis/blob/main/images/AlgorithmB.jpg)
![Algorithm C(alt text)](https://github.com/hm00081/metaphorVis/blob/main/images/AlgorithmC.jpg)
