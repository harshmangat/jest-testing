import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
import {testFunction, add, multiply, dataFetcher} from '../TestFunction';

// test('renders correctly', () => {
//   const snapshot = renderer.create(<App />);
//   expect(snapshot).toMatchSnapshot();
// });

// test('function testing', () => {
//   const AppRef = renderer.create(<App />).getInstance();;
//   expect(AppRef.getData(2)).toEqual(12);
// });

// test('function testing', () => {
//   const AppRef = renderer.create(<App />).getInstance();
//   AppRef.getData(2);
//   expect(AppRef.state.counter).toEqual(2);
// });

describe('functionality of multiple functions', () => {
  test(' global function testing', () => {
    const input = testFunction(2);
    const output = 20;
    expect(input).toEqual(output);
  });
  test('sum', () => {
    const data = add(1, 2);
    expect(data).toEqual(3);
  });

  test('multiply', () => {
    const data = multiply(5, 5);
    expect(data).toEqual(25);
  });

  test('api testing', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      let data = new Promise((res, rej) => {
        res({
          json: function () {
            return {
              id: 1,

              name: 'Leanne Graham',

              username: 'Bret',

              email: 'Sincere@april.biz',

              phone: '1-770-736-8031 x56442',

              website: 'hildegard.org',
            };
          },
        });
      });

      return data;
    });

    const respo = await dataFetcher();

    expect(respo).toEqual({
      id: 1,

      name: 'Leanne Graham',

      username: 'Bret',

      email: 'Sincere@april.biz',

      phone: '1-770-736-8031 x56442',

      website: 'hildegard.org',
    });
  });
});
