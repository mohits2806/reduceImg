import React from "react";
import { Check } from "lucide-react";
import { COMPRESSION_PRESETS } from "../utils/constants";

const CompressionModeSelector = ({ mode, onModeChange, compressionMethod }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-200">
          Compression Mode
        </h3>
        {compressionMethod === "preset" && (
          <span className="text-sm text-gray-400">Select quality preset</span>
        )}
      </div>

      {compressionMethod === "preset" && (
        <div className="grid grid-cols-3 gap-3">
          {Object.entries(COMPRESSION_PRESETS).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => onModeChange(key)}
              className={`
                relative p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105
                ${
                  mode === key
                    ? "border-blue-500 bg-blue-900/30 shadow-lg"
                    : "border-gray-700 hover:border-gray-600 bg-gray-800"
                }
              `}
              aria-pressed={mode === key}
            >
              <div className="text-2xl mb-2">{preset.icon}</div>
              <div className="font-medium dark:text-gray-200">{preset.label}</div>
              <div className="text-xs dark:text-gray-400 mt-1">
                {preset.description}
              </div>
              {mode === key && (
                <div className="absolute top-2 right-2">
                  <Check className="w-5 h-5 text-blue-500" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompressionModeSelector;