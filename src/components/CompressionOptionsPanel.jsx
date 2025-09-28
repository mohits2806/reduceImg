import React from "react";
import { Zap, Target } from "lucide-react";

const CompressionOptionsPanel = ({
  compressionMethod,
  onMethodChange,
  stripMetadata,
  onStripMetadataChange,
}) => {
  return (
    <div className="mb-6 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
      <h3 className="text-lg font-semibold text-gray-200 mb-4">
        Compression Options
      </h3>

      <div className="space-y-4">
        <div className="flex space-x-3">
          <button
            onClick={() => onMethodChange("preset")}
            className={`
              flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center
              ${
                compressionMethod === "preset"
                  ? "bg-blue-500 dark:text-white shadow-lg transform scale-105"
                  : "bg-gray-800 dark:text-gray-300 hover:bg-gray-700 border border-gray-700 opacity-50"
              }
            `}
          >
            <Zap className="w-4 h-4 mr-2" />
            Preset Mode
          </button>
          <button
            onClick={() => onMethodChange("target")}
            className={`
              flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center
              ${
                compressionMethod === "target"
                  ? "bg-blue-500 dark:text-white shadow-lg transform scale-105"
                  : "bg-gray-800 dark:text-gray-300 hover:bg-gray-700 border border-gray-700 opacity-50"
              }
            `}
          >
            <Target className="w-4 h-4 mr-2" />
            Target Size
          </button>
        </div>

        <label className="flex items-center space-x-3 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={stripMetadata}
              onChange={(e) => onStripMetadataChange(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`
              w-14 h-7 rounded-full transition-colors duration-300
              ${stripMetadata ? "bg-blue-500" : "bg-gray-600"}
            `}
            >
              <div
                className={`
                absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-md
                ${stripMetadata ? "translate-x-8" : "translate-x-1"}
              `}
              ></div>
            </div>
          </div>
          <span className="text-gray-300 group-hover:text-gray-100">
            Remove metadata (EXIF, location, etc.)
          </span>
        </label>
      </div>
    </div>
  );
};

export default CompressionOptionsPanel;