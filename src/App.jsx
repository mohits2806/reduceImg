import React, { useState, useCallback } from "react";
import imageCompression from "browser-image-compression";
import { COMPRESSION_PRESETS } from "./utils/constants";
import Header from "./components/Header";
import ImageDropzone from "./components/ImageDropzone";
import CompressionOptionsPanel from "./components/CompressionOptionsPanel";
import CompressionModeSelector from "./components/CompressionModeSelector";
import TargetSizeInput from "./components/TargetSizeInput";
import CompressionResult from "./components/CompressionResult";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [compressedBlob, setCompressedBlob] = useState(null);
  const [compressionMode, setCompressionMode] = useState("medium");
  const [compressionMethod, setCompressionMethod] = useState("preset");
  const [targetSize, setTargetSize] = useState("100");
  const [targetSizeUnit, setTargetSizeUnit] = useState("KB");
  const [stripMetadata, setStripMetadata] = useState(true);
  const [isCompressing, setIsCompressing] = useState(false);

  const compressImage = useCallback(async () => {
    if (!originalImage) return;

    setIsCompressing(true);
    setCompressedImage(null);
    setCompressedBlob(null);

    try {
      let options = {
        useWebWorker: true,
        preserveExif: !stripMetadata,
      };

      if (compressionMethod === "preset") {
        const preset = COMPRESSION_PRESETS[compressionMode];
        options = {
          ...options,
          maxSizeMB: 10,
          maxWidthOrHeight: preset.maxWidthOrHeight,
          quality: preset.quality,
        };
      } else {
        // Target size compression
        const targetBytes =
          parseFloat(targetSize) *
          (targetSizeUnit === "KB" ? 1024 : 1024 * 1024);
        const targetMB = targetBytes / (1024 * 1024);

        // Dynamic resolution based on target size
        let maxWidthOrHeight = 1024; // Default high resolution for large targets
        if (targetBytes < 200 * 1024) {
          // < 200KB
          maxWidthOrHeight = 300;
        } else if (targetBytes < 500 * 1024) {
          // 200-500KB
          maxWidthOrHeight = 600;
        } // For >500KB, keep 1024

        options = {
          ...options,
          maxSizeMB: targetMB,
          maxWidthOrHeight: maxWidthOrHeight,
        };

        // Start with reasonable quality and adjust
        let quality = 0.9; // Start higher for better initial compression
        let compressed = null;
        let attempts = 0;
        const maxAttempts = 15; // Increased attempts for small targets
        const minQuality = 0.05; // Minimum quality to prevent infinite loop

        while (attempts < maxAttempts && quality > minQuality) {
          compressed = await imageCompression(originalImage, {
            ...options,
            quality: quality,
            useWebWorker: true,
          });

          if (compressed.size <= targetBytes) {
            break;
          }

          // Reduce quality more aggressively but enforce minimum
          quality = Math.max(quality * 0.8, minQuality);
          attempts++;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          setCompressedImage(e.target.result);
          setCompressedBlob(compressed);
        };
        reader.readAsDataURL(compressed);

        setIsCompressing(false);
        return;
      }

      const compressed = await imageCompression(originalImage, options);

      const reader = new FileReader();
      reader.onload = (e) => {
        setCompressedImage(e.target.result);
        setCompressedBlob(compressed);
      };
      reader.readAsDataURL(compressed);
    } catch (error) {
      console.error("Compression failed:", error);
      alert("Failed to compress image. Please try again.");
    }

    setIsCompressing(false);
  }, [
    originalImage,
    compressionMode,
    compressionMethod,
    targetSize,
    targetSizeUnit,
    stripMetadata,
  ]);

  return (
    <div className="min-w-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Header />

        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <ImageDropzone
              onImageUpload={setOriginalImage}
              originalImage={originalImage}
            />

            {originalImage && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <CompressionOptionsPanel
                    compressionMethod={compressionMethod}
                    onMethodChange={setCompressionMethod}
                    stripMetadata={stripMetadata}
                    onStripMetadataChange={setStripMetadata}
                  />

                  {compressionMethod === "preset" && (
                    <CompressionModeSelector
                      mode={compressionMode}
                      onModeChange={setCompressionMode}
                      compressionMethod={compressionMethod}
                    />
                  )}
                  {compressionMethod === "target" && (
                    <div className="mt-6">
                      <TargetSizeInput
                        targetSize={targetSize}
                        onTargetSizeChange={setTargetSize}
                        unit={targetSizeUnit}
                        onUnitChange={setTargetSizeUnit}
                      />
                    </div>
                  )}
                </div>

                {/* Compress Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={compressImage}
                    disabled={
                      isCompressing ||
                      (compressionMethod === "target" &&
                        (!targetSize.trim() ||
                          isNaN(parseFloat(targetSize)) ||
                          parseFloat(targetSize) <= 0))
                    }
                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform mb-4 ${
                      isCompressing ||
                      (compressionMethod === "target" &&
                        (!targetSize.trim() ||
                          isNaN(parseFloat(targetSize)) ||
                          parseFloat(targetSize) <= 0))
                        ? "bg-gray-400 text-gray-200 opacity-50 hover:cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 shadow-xl hover:shadow-2xl"
                    }`}
                  >
                    {isCompressing ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Compressing...
                      </span>
                    ) : (
                      "Compress Image"
                    )}
                  </button>
                </div>

                <CompressionResult
                  originalImage={originalImage}
                  compressedImage={compressedImage}
                  compressedBlob={compressedBlob}
                  isCompressing={isCompressing}
                />
              </>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;