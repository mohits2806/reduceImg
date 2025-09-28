export const COMPRESSION_PRESETS = {
  low: {
    label: "Low",
    description: "Minimal compression, best quality",
    quality: 0.9,
    maxWidthOrHeight: 2048,
    icon: "🎨",
  },
  medium: {
    label: "Medium",
    description: "Balanced compression",
    quality: 0.7,
    maxWidthOrHeight: 1920,
    icon: "⚡",
  },
  extreme: {
    label: "Extreme",
    description: "Maximum compression, smaller file",
    quality: 0.4,
    maxWidthOrHeight: 1280,
    icon: "🔥",
  },
};