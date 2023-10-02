import { useEffect, useState } from "react";

const Whisper = () => {

	const [apiKey, setApiKey] = useState("");
	const [uploadedFile, setUpload] = useState(null);
	const [responseObject, setResponse] = useState(null);
	//grabs API key
	useEffect(() => {
		fetch('/config.json').then(function (config) {
			setApiKey(config.apiKey);
		});
	})
	//This is the function we will use to transcribe the audio once we have it.
	const  query = async (filename) => {
		const data = fs.readFileSync(filename);
		const response = await fetch(
			"https://api-inference.huggingface.co/models/openai/whisper-large-v2",
			{
				headers: { Authorization: `Bearer ${apiKey}` },
				method: "POST",
				body: data,
			}
		);
		const result = await response.json();
		setResponse(result);
	}

	//this will handle the file upload and update uploadedFile's state
	const handleUpload = (e) => {
		setUpload(e.target.files[0])
		document.getElementById("transcribeButton").disabled = false;
	}
	
	return ( 
	<div>
		<input type="file"/>
		{uploadedFile ? 
		<p>{uploadedFile.filename}</p>
		: 
		<p>Upload an audiofile!</p>}
		<button id="transribeButton" onClick={(uploadedFile) => query(uploadedFile)} disabled>
			Transribe file!
		</button>
		<div>
			<p>Response</p>
			{responseObject ? <p>{responseObject}</p> : ''}
		</div>
	</div>
	)
}

export default Whisper