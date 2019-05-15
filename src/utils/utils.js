import { Dimensions } from 'react-native';

export const myWidth = Dimensions.get('window').width;
const myHeight = Dimensions.get('window').height;
const width = num => myWidth * handleSize(num);
const height = num => myHeight * handleSize(num);
const handleSize = (num) => {
    if (num <= 0) return 0;
    if (num > 100) return 1;

    return num / 100;
};

const standardWidth = 375.0;
const standardHeight = 667.0;

export function widthScale (dimension) {
    return (dimension / standardWidth) * myWidth;
}

export function heightScale (dimension) {
    return (dimension / standardHeight) * myHeight;
}

export {
    width, height
}

