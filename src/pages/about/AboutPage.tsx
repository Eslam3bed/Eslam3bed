import { useState } from "react";
import { User, Zap, Layers, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition, ResumeModal } from "@/components/common";
import { calculateExperience } from "@/data";
import resumePdf from "@/assets/files/eslam.dev.cv.pdf";

export const AboutPage = () => {
  const yearsOfExperience = calculateExperience();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span
              className="
              bg-gradient-to-r from-foreground via-blue-600 to-foreground 
              dark:from-foreground-dark dark:via-blue-400 dark:to-foreground-dark 
              bg-clip-text text-transparent
            "
            >
              Hi, I'm Eslam Abed
            </span>
            <span className="wave inline-block ml-2">👋</span>
          </h2>
          <div
            className="
            flex items-center justify-center space-x-2 
            text-accent-foreground dark:text-accent-dark-foreground font-semibold
          "
          >
            <Zap className="h-5 w-5" />
            <span>{yearsOfExperience}+ Years of Excellence</span>
            <Zap className="h-5 w-5" />
          </div>
        </div>

        <Card
          className="
          max-w-4xl mx-auto 
          border-white/20 dark:border-white/10
          shadow-2xl shadow-blue-500/10 dark:shadow-blue-400/10
          bg-white/80 dark:bg-card-dark/80
          backdrop-blur-xl
          hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20
          transition-all duration-300
          relative
          overflow-hidden
        "
        >
          {/* Glass effect overlay */}
          <div
            className="
            absolute inset-0 
            bg-gradient-to-br from-white/30 via-white/5 to-transparent 
            dark:from-white/10 dark:via-white/5 dark:to-transparent
            pointer-events-none
          "
          />

          <CardContent className="p-8 space-y-6 relative z-10">
            <div className="text-lg text-muted-foreground dark:text-muted-dark-foreground leading-relaxed space-y-4">
              <p>
                A passionate and accomplished{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Full-Stack Web Developer
                </span>{" "}
                with a proven track record of delivering scalable, data-driven,
                and high-impact solutions.
              </p>

              <div
                className="
                bg-gradient-to-r from-white/60 to-blue-50/60 
                dark:from-white/10 dark:to-blue-950/30 
                p-6 rounded-2xl 
                border border-white/30 dark:border-white/10
                backdrop-blur-md
                hover:bg-blue-50/30 dark:hover:bg-blue-950/40
                transition-all duration-300
              "
              >
                <h3 className="font-semibold text-foreground dark:text-foreground-dark mb-3 flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                  About Me
                </h3>
                <p>
                  I specialize in creating and maintaining robust, end-to-end
                  applications and mobile-friendly websites, with a strong focus
                  on delivering rich user experiences. Throughout my career,
                  I've collaborated with cross-functional teams to tackle
                  complex challenges and provide innovative solutions, ensuring
                  successful project delivery.
                </p>
              </div>

              <div
                className="
                bg-gradient-to-r from-blue-50/60 to-white/60 
                dark:from-blue-950/30 dark:to-white/10 
                p-6 rounded-2xl 
                border border-white/30 dark:border-white/10
                backdrop-blur-md
                hover:bg-blue-50/30 dark:hover:bg-blue-950/40
                transition-all duration-300
              "
              >
                <h3 className="font-semibold text-foreground dark:text-foreground-dark mb-3 flex items-center">
                  <Layers className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                  Expertise
                </h3>
                <p>
                  My expertise spans front-end development, big data solutions,
                  and DevOps integration, with a proven track record of leading
                  teams, mentoring developers, and driving product growth.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button
                asChild
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
                <a href="mailto:e.eslam3bed@gmail.com?subject=I%20would%20like%20to%20hire%20you">
                  <Mail className="mr-2 h-4 w-4" />
                  Let's Connect
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsResumeModalOpen(true)}
                className="
                  border-blue-200 dark:border-blue-800 
                  hover:bg-blue-50 dark:hover:bg-blue-950/50
                  backdrop-blur-sm
                  hover:border-blue-300 dark:hover:border-blue-700
                  transition-all duration-300
                  hover:scale-105
                "
              >
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        pdfUrl={resumePdf}
      />
    </PageTransition>
  );
};
