import { useState } from 'react';
import axios from 'axios';

// Define the structure of the OpenAI API response
interface ChatResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

const ChatBot: React.FC = () => {
  const [input, setInput] = useState<string>(''); // Type input as a string
  const [response, setResponse] = useState<string>(''); // Type response as a string
  const [loading, setLoading] = useState<boolean>(false); // Type loading as a boolean
  const [error, setError] = useState<string>(''); // Type error as a string

  const handleChat = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post<ChatResponse>( // Type axios response
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // or 'gpt-4'
          messages: [{ role: 'user', content: input }],
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer sk-16nIfk7GOD-w6mXjZYNjaE-Tb_pYJb5LMHdDvjq7njT3BlbkFJN1DgHfG0fKjsfgZsmxIoOGiJx2wqfwE7cssZlPfSAA`, // Replace with your actual API key
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('API Response:', res.data); // Log the API response for debugging
      setResponse(res.data.choices[0].message.content); // Update the response
    } catch (err: any) {
      if (err.response) {
        console.error('Error response:', err.response.data); // Log the error response data
        setError(`Error: ${err.response.data.error.message}`); // Display specific error message
      } else {
        console.error('Error:', err.message); // Log any other errors
        setError('Failed to get a response from the API.');
      }
    }
    setLoading(false);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me about crop recommendations..."
      />
      <button onClick={handleChat} disabled={loading}>
        {loading ? 'Sending...' : 'Search'}
      </button>
      {error && <p className="error">{error}</p>}
      <p>{response}</p>
    </div>
  );
};

export default ChatBot;
