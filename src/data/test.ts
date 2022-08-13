import { basicData, clusterone } from '../Data';
import lodash from 'lodash';

// const test = basicData.links.map((obj) => {
//     clusterone.links.find((one) => {
//         if (one.source === obj.source && one.target === obj.target && one.valueid === obj.valueid && one.process === obj.process) {
//             return true;
//         } else false;
//     });
// });

clusterone.links.forEach((one) => {
    const itemIndex = basicData.links.findIndex((obj) => one.source === obj.source && one.target === obj.target && one.valueid === obj.valueid && one.process === obj.process);
    if (itemIndex > -1) {
        basicData.links[itemIndex] = one;
    } else {
        //@ts-ignore
        basicData.links = basicData.links.push(one);
    }
});

console.log(basicData);
