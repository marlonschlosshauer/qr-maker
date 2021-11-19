import QRCode from "qrcode.react";
import { useEffect, useRef, useState } from "react";
import { saveAs } from 'file-saver'

import './App.css';

const App = () => {
	const [text, setText] = useState('');
	const code = useRef();

	useEffect(() => document.title = 'QR-maker', [])

	const download = () => {
		const image = code.current?.firstChild;
		if (text.length > 0 && image) {
			saveAs(new Blob(
				[new XMLSerializer().serializeToString(image.cloneNode(true))],
				{ type: 'image/svg+xml;charset=utf-8' }), 'qr-code.svg'
			);
		}
	}

	return (
		<div className="App">
			<div className="input-container">
				<textarea name="qr" rows="5" cols="50" type="textarea" placeholder="Enter QR text" value={text} onChange={({ target }) => {
					document.title = target.value;
					setText(target.value)
				}} />
			</div>
			<div className="qr-container" ref={code}>
				<QRCode className='qr-code' value={(text.length > 0) ? text : 'https://marlonschlosshauer.github.io/qr-maker/' } renderAs='svg' size={300} />
			</div>
			<div className="download-container">
				<button className={`download-button ${(text.length > 0) ? 'active-button' : 'disabled-button'}`} onClick={download}>Download</button>
			</div>
		</div>
	);
}

export default App;
