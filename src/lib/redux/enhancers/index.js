import { compose } from 'redux';
import { includeHiToState } from './includeHiToState';
import { sayHiOnDispatch } from './sayHiOnDispatch';

const enhancers = compose(sayHiOnDispatch, includeHiToState);

export default enhancers;