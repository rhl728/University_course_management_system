/ hooks/useResults.js
import { useAppContext } from '../contexts/AppContext';
import { filterResults, sortResultsByGrade, calculateAveragePoints } from '../utils/helpers';

export const useResults = () => {
  const { state, dispatch } = useAppContext();
  const { results, searchTerm } = state;

  const filteredResults = filterResults(results, searchTerm);
  const sortedResults = sortResultsByGrade(filteredResults);

  const addResult = (resultData) => {
    dispatch({ type: 'ADD_RESULT', payload: resultData });
  };

  const updateResult = (resultData) => {
    dispatch({ type: 'UPDATE_RESULT', payload: resultData });
  };

  const deleteResult = (resultId) => {
    dispatch({ type: 'DELETE_RESULT', payload: resultId });
  };

  const getResultById = (resultId) => {
    return results.find(result => result.id === resultId);
  };

  const getResultsByStudent = (studentId) => {
    return results.filter(result => result.studentId === studentId);
  };

  const getResultsByCourse = (courseCode) => {
    return results.filter(result => result.courseCode === courseCode);
  };

  const getAveragePoints = () => {
    return calculateAveragePoints(results);
  };

  const getGradeDistribution = () => {
    const distribution = {};
    results.forEach(result => {
      distribution[result.grade] = (distribution[result.grade] || 0) + 1;
    });
    return distribution;
  };

  return {
    results: sortedResults,
    allResults: results,
    addResult,
    updateResult,
    deleteResult,
    getResultById,
    getResultsByStudent,
    getResultsByCourse,
    getAveragePoints,
    getGradeDistribution
  };
};