import React, { useState } from 'react';

import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [operator, setOperator] = useState(null);
    const [prevValue, setPrevValue] = useState(null);

    const handleNumClick = (number) => {
        setInput((prevInput) => prevInput + number);
    };

    const handleOprtrClick = (op) => {
        if (input === '') return;
        if (prevValue === null) {
            setPrevValue(parseFloat(input));
        } else if (operator) {
            calculate();
        }
        setOperator(op);
        setInput('');
    };

    const calculate = () => {
        if (operator && prevValue !== null && input !== '') {
            const currentValue = parseFloat(input);
            let newResult = result;

            switch (operator) {
                case '+':
                    newResult = prevValue + currentValue;
                    break;
                case '-':
                    newResult = prevValue - currentValue;
                    break;
                case '*':
                    newResult = prevValue * currentValue;
                    break;
                case '/':
                    newResult = currentValue === 0 ? 'Error' : prevValue / currentValue;
                    break;
                default:
                    break;
            }

            if (newResult !== 'Error') {
                newResult = parseFloat(newResult.toFixed(3));
            }

            setResult(newResult);
            setPrevValue(newResult);
            setInput('');
            setOperator(null);
        }
    };

    const handleEqualClick = () => {
        calculate();
    };

    const handleResetClick = () => {
        setInput('');
        setResult(null);
        setPrevValue(null);
        setOperator(null);
    };

    const handleDotClick = () => {
        if (!input.includes('.')) {
            setInput(input + '.');
        }
    };

    return (
        <div className="calculator">
            <div className="display">{input || result || '0'}</div>
            <div className="buttons">
                <button onClick={handleResetClick}>C</button>
                <button onClick={() => handleOprtrClick('+')}>+</button>
                <button onClick={() => handleOprtrClick('-')}>-</button>
                <button onClick={() => handleOprtrClick('*')}>*</button>
                <button onClick={() => handleOprtrClick('/')}>/</button>
                <button onClick={() => handleNumClick('7')}>7</button>
                <button onClick={() => handleNumClick('8')}>8</button>
                <button onClick={() => handleNumClick('9')}>9</button>
                <button onClick={() => handleNumClick('4')}>4</button>
                <button onClick={() => handleNumClick('5')}>5</button>
                <button onClick={() => handleNumClick('6')}>6</button>
                <button onClick={() => handleNumClick('1')}>1</button>
                <button onClick={() => handleNumClick('2')}>2</button>
                <button onClick={() => handleNumClick('3')}>3</button>
                <button onClick={() => handleNumClick('0')}>0</button>
                <button onClick={handleDotClick}>.</button>
                <button onClick={handleEqualClick}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
