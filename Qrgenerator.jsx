import { useState } from "react";
import QRCode from "react-qr-code";
import './generator.css';
function Qrscanner()
{
    const[inputValue, setInputValue] = useState("")
    //download 
    const download = () => {
        const svg = document.getElementById("QRCode");
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");

            //name of image
            downloadLink.download = `${inputValue}`;
            downloadLink.href = `${pngFile}`;
            downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    }
    return(
        <div className="gen">
            <h1>Generate QR Code</h1>
            <div style={{height: "auto", margin: "0 auto", maxWidth: 64, width: "100%"}}>
                <QRCode
                size={256}
                style={{height: "auto", maxwidth: "100%", width: "100%"}}
                value={inputValue}
                viewBox={`0 0 256 256`}
                id="QRCode"
                />
            </div>
            <input type="text" onChange={(e) => setInputValue(e.target.value)}></input>
            <input type="button" onClick={download} value="Download"></input>
        </div>
    )
}

export default Qrscanner;