import React , {useState, useRef, useEffect} from 'react';
import html2canvas from 'html2canvas';

const InputArea = ({values, colors, downloadUsed}) => {
  const [text, setText] = useState([]);
  const [myHeight, setMyHeight] = useState(200);
  const [numberOfLines, setNumberOfLines] = useState(0);
  const [nextLine, setNextLine] = useState(6);
  const [backgroundheight, setBackgroundheight] = useState(300);

  const handleChange = event => {
    setText([event.target.value]);
  }

  useEffect(() => {
    let numLines = text.join('').split(/\r\n|\r|\n/).length;
    setNumberOfLines(numLines);
    console.log('number of lines ' + numberOfLines);

    if(numberOfLines === nextLine) {
      console.log('numberOfLines === nextLine' + numberOfLines + ' ' + nextLine);
      setMyHeight(myHeight + 15);
      setBackgroundheight(backgroundheight + 15);
      setNextLine(nextLine + 1);
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

    return (
        <>
          <div id='download' style={{height: backgroundheight + 'px', transition: 'height .3s'}} className={`text-container ${colors.toLowerCase()}`}>
            <textarea     
            id='text-area' 
            style={{height: myHeight + 'px', transition: 'height .2s'}} 
            className={'background ' + values.replace(/\s/g, '-')}  
            value={text} onChange={handleChange} 
            spellcheck='false'/>
          </div>
        </>
    )
}



export default InputArea
