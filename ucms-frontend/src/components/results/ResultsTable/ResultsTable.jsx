import React from "react";
import { Edit3, Trash2 } from "lucide-react";
import { useAppContext } from "../../../contexts";

const ResultsTable = () => {
  const { state, dispatch } = useAppContext();
  const { results, searchTerm } = state;

  const filteredResults = results.filter(
    (result) =>
      result.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (result) => {
    dispatch({
      type: "OPEN_MODAL",
      payload: { type: "result", item: result },
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this result?")) {
      dispatch({ type: "DELETE_RESULT", payload: id });
    }
  };

  const getGradeColor = (grade) => {
    if (grade.startsWith("A")) return "bg-green-100 text-green-800";
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-800";
    if (grade.startsWith("C")) return "bg-yellow-100 text-yellow-800";
    if (grade.startsWith("D")) return "bg-orange-100 text-orange-800";
    return "bg-red-100 text-red-800";
  };

  if (filteredResults.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">
          {searchTerm
            ? "No results found matching your search."
            : "No results available."}
        </div>
        {searchTerm && (
          <div className="text-gray-400 text-sm">
            Try adjusting your search terms or add a new result.
          </div>
        )}
      </div>
    );
  }

  const averageGPA =
    filteredResults.reduce((sum, result) => sum + result.points, 0) /
    filteredResults.length;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Results ({filteredResults.length})
          </h2>
          <div className="text-sm text-gray-600 mt-1">
            Average Points:{" "}
            <span className="font-semibold">{averageGPA.toFixed(2)}</span>
          </div>
        </div>
        {searchTerm && (
          <div className="text-sm text-gray-600">
            Showing results for "{searchTerm}"
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Points
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Semester
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredResults.map((result) => (
                <tr
                  key={result.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {result.studentName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {result.studentId}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {result.courseCode}
                      </div>
                      <div className="text-sm text-gray-500 max-w-xs truncate">
                        {result.courseTitle}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(
                        result.grade
                      )}`}
                    >
                      {result.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {result.points}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {result.semester}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(result)}
                        className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="Edit Result"
                      >
                        <Edit3 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(result.id)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Delete Result"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsTable;
