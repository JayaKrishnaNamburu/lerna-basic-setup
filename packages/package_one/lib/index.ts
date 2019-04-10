import packageTwo from '@jkrishna95/package_two'

const packageOne = () => {
    console.log('This is from imported package');
}

packageTwo();

export default packageOne;