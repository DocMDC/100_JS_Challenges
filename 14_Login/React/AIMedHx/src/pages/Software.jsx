import React, {useState, useEffect} from "react"
import { FaBold, FaItalic, FaUnderline, FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { Link } from "../../node_modules/react-router-dom"
import ReactDOM from "react-dom"



export default function Software() {
    const [fontSize, setFontSize] = useState('')
    const [fontFamily, setFontFamily] = useState('')
    const [boldFont, setBoldFont] = useState(false)
    const [italicFont, setItalicFont] = useState(false)
    const [underlineFont, setUnderlineFont] = useState(false)
    const [alignText, setAlignText] = useState('justify')
    const [text, setText] = useState('')
    const [textArr, setTextArr] = useState([])

    function updateTextArea(e) {
        const {value} = e.target
        setText(value)
    }

    let highlightedText

    function updateSelectedText() {
        highlightedText = window.getSelection().toString()
        highlightedText && setTextArr([...textArr, highlightedText]) 
    }

    function makeAligned(location) {
        setAlignText(location)
    }

    function selectFontSize(e) {
        const selectedSize = e.target.value
        setFontSize(selectedSize)
    }

    function selectFontFamily(e) {
        const selectedFamily = e.target.value
        setFontFamily(selectedFamily)
    }

    function makeBold() {
        setBoldFont(prev => !prev)
    }

    function makeItalic() {
        setItalicFont(prev => !prev)
    }

    function makeUnderlined() {
        setUnderlineFont(prev => !prev)
    }

    const fontStyles = {
        fontSize: `${fontSize}px`,
        fontFamily: `${fontFamily}`,
        fontWeight: boldFont ? 'bold' : 'normal',
        fontStyle: italicFont ? 'italic' : 'normal',
        textDecoration: underlineFont ? 'underline' : 'none',
        textAlign: alignText
    }

    return (
        <div>
            <header>
                <div className="software__header__nav">
                    <h4>Patient Lookup</h4>
                    <h4>Patient list</h4>
                    <h4>New SmartText</h4>
                    <h4>Edit SmartText</h4>
                    <h4>Save</h4>
                    <h4>Save As</h4>
                    <Link to="*" className="software__header__logout">
                        <h4>Logout</h4>
                    </Link>
                </div>
                <div className="software__toolbar">
                    <select className="toolbar__font__family" onChange={selectFontFamily}>
                        <option value="Arial">Arial</option>
                        <option value="Sans-serif">Sans-serif</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                    <select className="toolbar__font__size" onChange={selectFontSize}>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="18">18</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                    </select>
                    <FaBold className="software__toolbar__tool" onClick={makeBold}/>
                    <FaItalic className="software__toolbar__tool" onClick={makeItalic}/>
                    <FaUnderline className="software__toolbar__tool" onClick={makeUnderlined}/>
                    <div className="software__font__color software__toolbar__tool">
                        A
                    </div>
                    <FaAlignLeft className="software__toolbar__tool" onClick={() => makeAligned('left')}/>
                    <FaAlignCenter className="software__toolbar__tool" onClick={() => makeAligned('center')}/>
                    <FaAlignRight className="software__toolbar__tool" onClick={() => makeAligned('right')}/>
                    <FaAlignJustify className="software__toolbar__tool" onClick={() => makeAligned('justify')}/>
                </div>
            </header>
            <div className="software__textarea__container">
                <textarea 
                    className="software__textarea" 
                    style={fontStyles} 
                    onMouseUp={updateSelectedText}
                    value={text}
                    onChange={updateTextArea}
                    />
            </div>
        </div>
    )
}