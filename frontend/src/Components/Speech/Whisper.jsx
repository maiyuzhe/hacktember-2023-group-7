import { useState, useRef } from "react";

const Whisper = () => {
	const [playbackAudio, setPlayback] = useState(null);
	const [audioFile, setFile] = useState(null);
	const [responseObject, setResponse] = useState(null);
	const [buttonDisabled, setEnable] = useState(false);
	const audioRef = useRef();

	console.log(process.env.REACT_APP_KEY)

	//This is the function we will use to transcribe the audio once we have it.
	const  query = async () => {
		const upload = new FormData();
		upload.append("audio", audioFile);
		const response = await fetch(
			"https://api-inference.huggingface.co/models/openai/whisper-large-v2",
			{
				headers: { Authorization: `Bearer ${process.env.REACT_APP_KEY}` },
				method: "POST",
				body: upload,
			}
		);
		const result = await response.json();
		//setResponse(result);
		console.log(result);
	}

	//this will handle the file upload and update playbackAudio's state
	const handleUpload = (e) => {
		const submission = URL.createObjectURL(e.target.files[0])
		setPlayback(submission);
		setFile(e.target.files[0])
		if(audioRef.current){
			audioRef.current.pause();
			audioRef.current.load();
		}
		console.log(submission)
		setEnable(true);
	}
	
	return ( 
	<div>
		<label>
			Upload File
			<input type="file" onChange={handleUpload}/>
		</label>
		{!buttonDisabled ? 
		<p>{playbackAudio}</p>
		: 
		<p>Upload an audiofile!</p>}
		<audio controls ref={audioRef}>
			<source src={playbackAudio}/>
		</audio>
		<br/>
		<button id="transribeButton" onClick={query} disabled={!buttonDisabled}>
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