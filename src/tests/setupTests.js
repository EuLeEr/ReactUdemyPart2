const path=require("path");
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

Enzyme.configure({ adapter: new Adapter() });
//require('dotenv').config({ path: '.env.test' });
//Enzyme.configure({ disableLifecycleMethods: true }); for Enzyme v. 3
DotEnv.config({path: 'env.test'});

