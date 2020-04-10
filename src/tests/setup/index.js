import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon, { spy } from 'sinon';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

require('jsdom-global')();

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
global.spy = spy;
global.expect = expect;
