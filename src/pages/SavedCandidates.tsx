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
    <main>
      <h1>Potential Candidates</h1>
      {savedCandidates.map((candidate) => (
        <div className="candidate-card" key={candidate.login}>
        <img src={candidate.avatar_url} alt={candidate.login} className="avatar" />
        <h2>{candidate.name} <em>({candidate.login})</em></h2>
          <p>Location: {candidate.location || "N/A"}</p>
          <p>Email: {candidate.email || "N/A"}</p>
          <p>Company: {candidate.company || "N/A"}</p>
          <a href={candidate.html_url} target="_blank">GitHub Profile</a>
          <button className="circle-button red" onClick={() => handleRemove(candidate.login)}>−</button>
        </div>
      ))}
    </main>
  );
};

export default SavedCandidates;
