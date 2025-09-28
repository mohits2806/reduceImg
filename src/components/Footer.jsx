import { Shield, User, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl text-center">
      <div className="flex items-center justify-center mb-3">
        <Shield className="w-5 h-5 mr-2 text-green-500" />
        <span className="font-semibold text-gray-200">
          100% Privacy Guaranteed
        </span>
      </div>
      <p className="text-sm text-gray-400 mb-4">
        All compression happens locally in your browser. No images are uploaded
        to any server.
      </p>
      <p className="text-xs text-gray-500 mb-4">
        Your images never leave your device • No data collection • No tracking
      </p>

      {/* Developer Information */}
      <div className="border-t border-gray-600 pt-4">
        <div className="flex items-center justify-center mb-2">
          <User className="w-4 h-4 mr-2 text-blue-500" />
          <span className="font-medium text-gray-300">
            Designed & Developed by Mohit Shaharwale
          </span>
        </div>
        <a
          href="https://mohitshaharwale.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          mohitshaharwale.netlify.app
          <ExternalLink className="w-3 h-3 ml-1" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;