import React from 'react';
import { shallow } from 'enzyme';
import ChartDonutUtilization from './ChartDonutUtilization';

Object.values([true, false]).forEach(isRead => {
  test(`Chart`, () => {
    const view = shallow(<ChartDonutUtilization />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <ChartDonutUtilization
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={200}
      width={200}
    />
  );
  expect(view).toMatchSnapshot();
});
