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

  if (savedCandidates.length === 0) return <p>No saved candidates found.</p>;

  return (
    <main>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
      <tbody>
        {savedCandidates.map((candidate) => (
        <tr key={candidate.login}>
          <td><img src={candidate.avatar_url} alt={candidate.login} className="avatar" /></td>
          <td>{candidate.name} <em>({candidate.login})</em></td>
          <td>{candidate.location || "N/A"}</td>
          <td>{candidate.email || "N/A"}</td>
          <td>{candidate.company || "N/A"}</td>
          <td>{candidate.bio || 'N/A'}</td>
          <td>
            <button className="circle-button red" onClick={() => handleRemove(candidate.login)}>−</button>
          </td>
        </tr>
      ))}
      </tbody>
      </table>
    </main>
  );
};

export default SavedCandidates;
