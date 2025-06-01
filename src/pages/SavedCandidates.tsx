import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(saved);
  }, []);

  const handleRemove = (login: string) => {
    const updatedList = savedCandidates.filter((candidate) => candidate.login !== login);
    setSavedCandidates(updatedList);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedList));
  };

  if (savedCandidates.length === 0) {
    return <p>No saved candidates found.</p>;
  }

  return (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.map((candidate) => (
        <div key={candidate.login} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h2>{candidate.name}</h2>
          <img src={candidate.avatar_url} alt={candidate.login} width={100} />
          <p>Username: {candidate.login}</p>
          <p>Location: {candidate.location || 'N/A'}</p>
          <p>Email: {candidate.email || 'N/A'}</p>
          <p>Company: {candidate.company || 'N/A'}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
          <br />
          <button onClick={() => handleRemove(candidate.login)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default SavedCandidates;
