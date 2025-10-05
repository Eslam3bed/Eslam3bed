import { X, Download } from "lucide-react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export const ResumeModal = ({ isOpen, onClose, pdfUrl }: ResumeModalProps) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "eslam-abed-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="
          fixed inset-4 md:inset-8 lg:inset-16
          bg-white/95 dark:bg-background-dark/95 
          backdrop-blur-sm
          border border-white/20 dark:border-white/10 
          shadow-2xl shadow-blue-500/10 dark:shadow-blue-400/10
          rounded-lg
          overflow-hidden
          flex flex-col
          animate-in fade-in zoom-in-95 duration-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glass overlay effect */}
        <div
          className="
          absolute inset-0 
          bg-gradient-to-br from-white/30 via-white/5 to-transparent 
          dark:from-white/10 dark:via-white/5 dark:to-transparent
          pointer-events-none
        "
        />

        {/* Header */}
        <div
          className="
          relative z-10
          flex items-center justify-between 
          p-4 md:p-6
          border-b border-white/20 dark:border-white/10
          bg-white/50 dark:bg-white/5
          backdrop-blur-md
        "
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground dark:text-foreground-dark">
            Resume Preview
          </h3>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleDownload}
              className="
                bg-gradient-to-r from-blue-600 to-blue-700 
                hover:from-blue-700 hover:to-blue-800 
                dark:from-blue-500 dark:to-blue-600 
                dark:hover:from-blue-600 dark:hover:to-blue-700
                text-white dark:text-white
                shadow-lg shadow-blue-500/25
                hover:shadow-xl hover:shadow-blue-500/30
                border-0
                backdrop-blur-sm
                transition-all duration-300
                hover:scale-105
              "
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="
                hover:bg-blue-50 dark:hover:bg-blue-950/50
                transition-all duration-300
                hover:scale-110
              "
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative z-10 flex-1 overflow-hidden bg-gray-100 dark:bg-gray-900">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>,
    document.body
  );
};
