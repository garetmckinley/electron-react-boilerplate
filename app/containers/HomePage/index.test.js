import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import React from 'react';

import Button from '../../components/Common/Button';
import HomePage from '../HomePage';
import Header from '../../components/Common/Header';
import configureStore from '../../store/configureStore';


function setup(initialState) {
  const store = configureStore(initialState);
  const app = mount(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
  return {
    app,
    buttons: app.find(Button),
    header: app.find(Header)
  };
}

describe('containers', () => {
  describe('Home', () => {
    it('should display header', () => {
      const { header } = setup();
      expect(header.text()).to.match(/^Home$/);
    });
    it('should display counter button', () => {
      const { buttons } = setup();
      expect(buttons.at(0).node.props.url).to.match(/^\/counter/);
    });
    it('should display settings button', () => {
      const { buttons } = setup();
      expect(buttons.at(0).node.props.url).to.match(/^\/settings/);
    });
  });
});
