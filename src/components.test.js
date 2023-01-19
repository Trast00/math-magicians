import renderer from 'react-test-renderer';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

const navHeading = 'Math Magicians';
const homeHeading = 'Welcom to our page';
const quoteHeading = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis';
const calculatorHeading = 'Let s do some maths';

describe('test rendering', () => {
  test('test if App components render correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test navigation', () => {
  test('test navbar and home is displayed by default', () => {
    render(<App />);
    const titles = screen.getAllByRole('heading');
    expect(titles[0]).toHaveTextContent(navHeading);
    expect(titles[1]).toHaveTextContent(homeHeading);
    expect(titles.indexOf(quoteHeading)).toBe(-1);
    expect(titles.indexOf(calculatorHeading)).toBe(-1);
  });

  test('test naviation to quote', () => {
    render(<App />);
    const btnQuote = screen.getByText('Quotes');
    fireEvent.click(btnQuote);
    const titles = screen.getAllByRole('heading');
    expect(titles[1]).toHaveTextContent(quoteHeading);
    expect(titles.indexOf(homeHeading)).toBe(-1);
    expect(titles.indexOf(calculatorHeading)).toBe(-1);
  });

  test('test naviation to calculator', () => {
    render(<App />);
    const btnCalculator = screen.getByText('Calculator');
    fireEvent.click(btnCalculator);
    const titles = screen.getAllByRole('heading');
    expect(titles[1]).toHaveTextContent(calculatorHeading);
    expect(titles.indexOf(quoteHeading)).toBe(-1);
    expect(titles.indexOf(homeHeading)).toBe(-1);
  });
});

describe('Test Calculator Basic interaction', () => {
  test('test buttons interaction with screen', () => {
    render(<App />);
    const btnCalculator = screen.getByText('Calculator');
    fireEvent.click(btnCalculator);
    const result = screen.getAllByText('0')[0]; // first element with 0
    const btnZero = screen.getAllByText('0')[1]; // zero btn

    fireEvent.click(screen.getByText('2'));
    fireEvent.click(btnZero);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));

    expect(result).toHaveTextContent('2023');
  });

  test('test addiction with screen', () => {
    render(<App />);
    const btnCalculator = screen.getByText('Calculator');
    fireEvent.click(btnCalculator);
    const result = screen.getAllByText('0')[0]; // first element with 0

    fireEvent.click(screen.getByText('AC'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    expect(result).toHaveTextContent((5 + 12).toString());
  });
});
