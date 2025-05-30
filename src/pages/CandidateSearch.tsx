import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  return <h1>CandidateSearch</h1>;
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

  

export default CandidateSearch;
