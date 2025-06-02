import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidateList, setCandidateList] = useState<string[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        const rawUsers = await searchGithub();
        const usernames = rawUsers.map((user: any) => user.login);
        setCandidateList(usernames);
      } catch (err) {
        setError("Failed to load candidates.");
      }
    };

    loadCandidates();
  }, []);

  useEffect(() => {
    const loadCandidateProfile = async () => {
      if (candidateList.length === 0) {
        setCurrentCandidate(null);
        return;
      }
      setIsLoading(true);
      try {
        const profile = await searchGithubUser(candidateList[0]);
        setCurrentCandidate(profile);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load candidate profile.');
        setIsLoading(false);
      }
    };

    loadCandidateProfile();
  }, [candidateList]);

  const handleAccept = () => {
    if (currentCandidate) {
      const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      saved.push(currentCandidate);
      localStorage.setItem('savedCandidates', JSON.stringify(saved));
    }
    handleNext();
  };

  const handleNext = () => {
    setCandidateList((prev) => prev.slice(1));
  };

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!currentCandidate) return <p>No more candidates to review.</p>;

  return (
    <main>
      <h1>Candidate Search</h1>
      <div className="candidate-card">
        <img src={currentCandidate.avatar_url} alt={currentCandidate.login} className="avatar" />
        <h2>{currentCandidate.name} <em>({currentCandidate.login})</em></h2>
        <p>Location: {currentCandidate.location || 'N/A'}</p>
        <p>Email: {currentCandidate.email || 'N/A'}</p>
        <p>Company: {currentCandidate.company || 'N/A'}</p>
        <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">
        GitHub Profile
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '150px', marginTop: '1.5rem' }}>
        <button className="circle-button red" onClick={handleNext}>-</button>
        <button className="circle-button green" onClick={handleAccept}>+</button>
      </div>
    </main>
  );
};

export default CandidateSearch;
