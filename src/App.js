import QRCode from "qrcode.react";
import { useState } from "react";

import './App.css';

const App = () => {
	const [text, setText] = useState();
	return (
		<div className="App">
			<div className="input-container">
				<textarea name="qr" rows="5" cols="50" type="textarea" placeholder="Enter QR text" value={text} onChange={(e) => setText(e.target.value)} />
			</div>
			<div className="qr-container">
				<QRCode className='qr-code' value={text} renderAs='png' size={300} />
			</div>
		</div>
	);
}

export default App;
