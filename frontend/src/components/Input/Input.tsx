import React, { useState } from 'react';
import './Input.css'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Input() {

    const [destination, setDestination] = useState<string>("");
    const [shortUrl, setShortUrl] = useState<{ shortId: string } | null>(null);
    const [error, setError] = useState<string>("");


    const baseUrl = "http://localhost:4000";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShortUrl(null);

        const result = await axios
            .post(`${baseUrl}/api/url`, {
                destination,
            })
            .then((res) => res.data)
            .catch((err) => {
                setError(`Error: ${err.response.data.message}`);
            })
        setShortUrl(result);
    }

    return <div>
        <form onSubmit={handleSubmit} noValidate autoComplete='off'>
            <div className='inputs'>
                <TextField
                    className="input-text"
                    id="outlined-basic"
                    label="Long URL"
                    placeholder="http://example.com"
                    variant="outlined"
                    onChange={(e: any) => setDestination(e.target.value)} />
                <Button
                    type="submit"
                    className="input-button"
                    variant="contained"
                    color="primary">Make ShortURL</Button>
            </div>
        </form>
        {
            shortUrl ? (
                <div className="submit-response">
                    <b className="shortUrl-text">Short URL:</b>
                    <a href={`${baseUrl}/${shortUrl?.shortId}`}>{`${baseUrl}/${shortUrl?.shortId}`}</a>
                </div>
            ) : (
                    <div className="submit-response">
                    <b className="error-text">{error}</b>
                    <p className="hint-text"><small>hint: http://example.com</small></p>
                </div>
            )
        }
    </div >;
}
