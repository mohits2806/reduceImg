import React, { useState } from "react";
import { Target, AlertCircle } from "lucide-react";

const TargetSizeInput = ({
  targetSize,
  onTargetSizeChange,
  unit,
  onUnitChange,
}) => {
  const [error, setError] = useState("");

  const handleSizeChange = (e) => {
    const value = e.target.value;
    if (value === "" || (!isNaN(value) && parseFloat(value) > 0)) {
      onTargetSizeChange(value);
      setError("");
    } else {
      setError("Please enter a valid positive number");
    }
  };

  return (
    <div className="mb-6 p-6 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 dark:from-orange-900/20 dark:via-yellow-900/20 dark:to-red-900/20 rounded-2xl shadow-lg border border-orange-200 dark:border-orange-800">
      <div className="flex items-center mb-4">
        <Target className="w-6 h-6 mr-3 text-orange-600 dark:text-orange-400" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Target File Size
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="flex-1">
          <input
            type="number"
            value={targetSize}
            onChange={handleSizeChange}
            placeholder="e.g., 500"
            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-800 focus:outline-none transition-all duration-200"
            min="1"
            step="0.1"
          />
          {error && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-2 flex items-center animate-pulse">
              <AlertCircle className="w-4 h-4 mr-1" />
              {error}
            </p>
          )}
        </div>

        <div className="flex rounded-xl overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-sm">
          <button
            onClick={() => onUnitChange("KB")}
            className={`px-5 py-3 font-semibold transition-all duration-200 ${
              unit === "KB"
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            KB
          </button>
          <button
            onClick={() => onUnitChange("MB")}
            className={`px-5 py-3 font-semibold transition-all duration-200 ${
              unit === "MB"
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            MB
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
        The compressor will aim to reach this target size while preserving image quality as much as possible.
      </p>
    </div>
  );
};

export default TargetSizeInput;