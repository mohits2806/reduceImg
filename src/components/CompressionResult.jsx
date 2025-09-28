import React from "react";
import { Download, Check, Loader2 } from "lucide-react";
import { formatFileSize, calculatePercentageReduction } from "../utils/helpers";

const CompressionResult = ({
  originalImage,
  compressedImage,
  compressedBlob,
  isCompressing,
}) => {
  const downloadImage = () => {
    if (compressedBlob) {
      const url = URL.createObjectURL(compressedBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `compressed_${originalImage.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  if (isCompressing) {
    return (
      <div className="p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-xl text-center">
        <Loader2 className="w-12 h-12 mx-auto mb-4 text-blue-500 animate-spin" />
        <p className="text-lg font-semibold text-gray-300">
          Compressing your image...
        </p>
        <p className="text-sm text-gray-400 mt-2">
          This may take a few moments
        </p>
      </div>
    );
  }

  if (!compressedImage) return null;

  const originalSize = originalImage.size;
  const compressedSize = compressedBlob.size;
  const reduction = calculatePercentageReduction(originalSize, compressedSize);

  return (
    <div className="p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-200">
          Compression Complete!
        </h3>
        <div className="flex items-center space-x-2">
          <Check className="w-5 h-5 text-green-500" />
          <span className="text-green-400 font-medium">
            {reduction}% smaller
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-1">Original</p>
          <p className="text-xl font-bold text-gray-200">
            {formatFileSize(originalSize)}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-1">Compressed</p>
          <p className="text-xl font-bold text-green-400">
            {formatFileSize(compressedSize)}
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <img
          src={compressedImage}
          alt="Compressed"
          className="max-h-48 rounded-lg shadow-lg"
        />
      </div>

      <button
        onClick={downloadImage}
        className="w-fit-content mx-auto py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 
                   text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 
                   flex items-center justify-center shadow-lg"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Compressed Image
      </button>
    </div>
  );
};

export default CompressionResult;