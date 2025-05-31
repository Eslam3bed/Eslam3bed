import { User, Zap, Layers, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { calculateExperience } from '@/data'

export const AboutPage = () => {
  const yearsOfExperience = calculateExperience()

  return (
    <div className="animate-fade-in space-y-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground dark:from-foreground-dark dark:via-muted-dark-foreground dark:to-foreground-dark bg-clip-text text-transparent">
            Hi, I'm Eslam Abed
          </span>
          <span className="wave inline-block animate-pulse-slow ml-2">👋</span>
        </h2>
        <div className="flex items-center justify-center space-x-2 text-accent-foreground dark:text-accent-dark-foreground font-semibold">
          <Zap className="h-5 w-5" />
          <span>{yearsOfExperience}+ Years of Excellence</span>
          <Zap className="h-5 w-5" />
        </div>
      </div>

      <Card className="max-w-4xl mx-auto border-border dark:border-border-dark shadow-xl shadow-primary/5 dark:shadow-primary-dark/5 bg-card dark:bg-card-dark">
        <CardContent className="p-8 space-y-6">
          <div className="text-lg text-muted-foreground dark:text-muted-dark-foreground leading-relaxed space-y-4">
            <p>
              A passionate and accomplished <span className="text-foreground dark:text-foreground-dark font-semibold">Full-Stack Web Developer</span> with a proven track record of delivering scalable, data-driven, and high-impact solutions.
            </p>

            <div className="bg-gradient-to-r from-muted to-secondary dark:from-muted-dark dark:to-secondary-dark p-6 rounded-lg border border-border dark:border-border-dark">
              <h3 className="font-semibold text-foreground dark:text-foreground-dark mb-3 flex items-center">
                <User className="h-5 w-5 mr-2 text-foreground dark:text-foreground-dark" />
                About Me
              </h3>
              <p>
                I specialize in creating and maintaining robust, end-to-end applications and mobile-friendly websites, with a strong focus on delivering rich user experiences. Throughout my career, I've collaborated with cross-functional teams to tackle complex challenges and provide innovative solutions, ensuring successful project delivery.
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary to-muted dark:from-secondary-dark dark:to-muted-dark p-6 rounded-lg border border-border dark:border-border-dark">
              <h3 className="font-semibold text-foreground dark:text-foreground-dark mb-3 flex items-center">
                <Layers className="h-5 w-5 mr-2 text-foreground dark:text-foreground-dark" />
                Expertise
              </h3>
              <p>
                My expertise spans front-end development, big data solutions, and DevOps integration, with a proven track record of leading teams, mentoring developers, and driving product growth.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button className="bg-primary hover:bg-primary/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 text-primary-foreground dark:text-primary-dark-foreground">
              <Mail className="mr-2 h-4 w-4" />
              Let's Connect
            </Button>
            <Button variant="outline" className="border-border dark:border-border-dark hover:bg-muted dark:hover:bg-muted-dark">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 