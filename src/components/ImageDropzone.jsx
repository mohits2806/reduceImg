import React, { useState, useCallback, useRef } from "react";
import { Upload, Trash2 } from "lucide-react";

const ImageDropzone = ({ onImageUpload, originalImage }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleFile = useCallback(
    (file) => {
      if (file && file.type.startsWith("image/")) {
        onImageUpload(file);
      }
    },
    [onImageUpload]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files && files[0]) {
        handleFile(files[0]);
      }
    },
    [handleFile]
  );

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  return (
    <div
      className={`
        relative border-3 border-dashed rounded-2xl p-8 text-center transition-all duration-300
        ${
          isDragging
            ? "border-blue-500 bg-blue-900/30 scale-105"
            : "border-gray-600 hover:border-gray-500 bg-gray-800"
        }
        ${
          originalImage
            ? "mb-6"
            : "mb-8 min-h-[300px] flex items-center justify-center"
        }
      `}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
        id="image-upload"
      />

      {originalImage ? (
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <img
              src={URL.createObjectURL(originalImage)}
              alt="Original"
              className="max-h-64 rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-blue-500 dark:text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center"
            >
              <Upload className="w-4 h-4 mr-2" />
              Replace Image
            </button>
            <button
              onClick={() => onImageUpload(null)}
              className="px-4 py-2 bg-red-500 dark:text-white rounded-lg hover:bg-red-600 transition-colors flex items-center"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <Upload
            className={`w-16 h-16 mx-auto ${
              isDragging ? "text-blue-500" : "text-gray-400"
            }`}
          />
          <div>
            <p className="text-xl font-semibold text-gray-300">
              Drop your image here
            </p>
            <p className="text-sm text-gray-400 mt-2">
              or{" "}
              <label
                htmlFor="image-upload"
                className="text-blue-500 hover:text-blue-600 cursor-pointer font-medium"
              >
                browse files
              </label>
            </p>
          </div>
          <p className="text-xs text-gray-400">
            Supports: JPG, PNG, GIF, WebP, BMP
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageDropzone;
