import React , {useState, useRef, useEffect} from 'react';
import html2canvas from 'html2canvas';
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-typescript';

const InputArea = ({values, colors, downloadUsed, language}) => {
  const [text, setText] = useState('');
  const [myHeight, setMyHeight] = useState(200);
  const [numberOfLines, setNumberOfLines] = useState(0);
  const [nextLine, setNextLine] = useState(6);
  const [backgroundheight, setBackgroundheight] = useState(300);
  const [change, setChange] = useState(0);


  useEffect(() => {
    Prism.highlightAll();
  },[language]);


  const handleChange = event => {
    change < 20 ? setChange(change + 1) : setChange(0);
    setText(event.target.value)
  }


  useEffect(() => {
    let numLines = text.split(/\r\n|\r|\n/).length;
    setNumberOfLines(numLines);
    //console.log('number of lines ' + numberOfLines);

    if(numberOfLines === nextLine) {
      //console.log('numberOfLines === nextLine' + numberOfLines + ' ' + nextLine);
      setMyHeight(myHeight + 15);
      setBackgroundheight(backgroundheight + 15);
      setNextLine(nextLine + 1);
    }
    if(text[text.length-1] == "\n") { // If the last character is a newline character
      text += " "; // Add a placeholder space character to the final line 
    }
  }, [text]);

  const downloadPic = () => {
    let data = document.getElementById('download')

    html2canvas(data).then((canvas)=>{
      let image = canvas.toDataURL('image/png', 1.0);
      return image;
    }).then((image)=>{
      saveImg(image, 'exported-vis.png') 
      })
    }

  const saveImg = (blob, fileName) =>{
    var elem = window.document.createElement('a');
    elem.href = blob
    elem.download = fileName;
    elem.style = 'display:none;';
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
       elem.click();
    } else {
        elem.target = '_blank';
        elem.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
        }));
      }
        URL.revokeObjectURL(elem.href);
        elem.remove()
    } 
    if(downloadUsed){
      downloadPic();
    }

    useEffect(() => {
      Prism.highlightAll();
    }, [change]);

    return (
        <React.Fragment>
        
          <div id='download' style={{height: backgroundheight + 'px', transition: 'height .3s'}} className={`text-container ${colors.toLowerCase()}`}>

            <textarea     
            id='text-area' 
            style={{height: myHeight + 'px', transition: 'height .2s'}} 
           /* className={values.replace(/\s/g, '-')}    */       
            value={text} onChange={handleChange}
            spellCheck='false'/>
            
          <div className='code-div'>
            <pre 
              id='highlighting' 
              aria-hidden='true' 
              style={{height: myHeight - 25 + 'px', transition: 'height .2s'}} 
            >
            <code id='myCode' className={`${language === 'Language' || language === '' ? 'language-python' : `language-${language.toLowerCase()}`}`}>
            {text}
            </code>
          </pre>
          </div>
          </div>
          
        </React.Fragment>
    )
}



export default InputArea
