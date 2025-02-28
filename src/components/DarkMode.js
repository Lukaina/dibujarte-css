
import React, {useState} from 'react';
import darkmode from '../assets/darkmode.png';
import lightmode from '../assets/light.png';


function DarkMode() {
  const [img, setImg] = useState(darkmode);

  const handlerDarkMode = () => {
    const body = document.body
    const isDarkMode = body.classList.contains('dark-mode-colors')
    setImg(
      isDarkMode ?darkmode :lightmode
    )
    body.classList.toggle('dark-mode-colors');
  }

	return (
		<div onClick={handlerDarkMode} className="dark__mode">
			<img className="dark__mode-icon" src={img} alt="dark mode icon" />
		</div>
	)
}

export default DarkMode;
