import React from 'react';

export default function Calculator() {
    return (
        <div className='calculator-container'>
            <div className="display"></div>
            <div className="input-container">
                <div className='ac'>AC</div>
                <div className='del'>Del</div>
                <div className='divide'>÷</div>
                <div className='seven'>7</div>
                <div className='eight'>8</div>
                <div className='nine'>9</div>
                <div className='multiply'>X</div>
                <div className='four'>4</div>
                <div className='five'>5</div>
                <div className='six'>6</div>
                <div className='subtract'>-</div>
                <div className='one'>1</div>
                <div className='two'>2</div>
                <div className='three'>3</div>
                <div className='add'>+</div>
                <div className='zero'>0</div>
                <div className='dot'>.</div>
                <div className='equal'>=</div>
            </div>
        </div>
    )
}