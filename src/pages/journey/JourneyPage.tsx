import { useState } from 'react'
import { Briefcase, Calendar, MapPin, ArrowRight, ExternalLink, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ProjectModal } from '@/components/common/ProjectModal'
import { PageTransition } from '@/components/common'
import { workExperience, volunteerExperience, Project } from '@/data'

export const JourneyPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <PageTransition>
      <div className="text-center mb-12">
        <h2 className="
          text-3xl font-bold mb-4
          bg-gradient-to-r from-foreground via-blue-600 to-foreground 
          dark:from-foreground-dark dark:via-blue-400 dark:to-foreground-dark 
          bg-clip-text text-transparent
        ">
          My Professional Journey
        </h2>
        <p className="text-muted-foreground dark:text-muted-dark-foreground">
          A timeline of growth, innovation, and impact
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="
            absolute left-8 top-0 bottom-0 w-1 
            bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 
            dark:from-blue-400 dark:via-blue-500 dark:to-blue-600
            rounded-full
            shadow-lg shadow-blue-500/25
          "></div>

          {workExperience.map((job) => (
            <div key={job.id} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="
                absolute left-6 w-6 h-6 
                bg-gradient-to-br from-blue-500 to-blue-600 
                dark:from-blue-400 dark:to-blue-500 
                rounded-full border-4 border-white 
                dark:border-background-dark 
                shadow-xl shadow-blue-500/30 
                z-10
              "></div>

              {/* Content */}
              <div className="ml-20">
                <Card className="
                  border-white/20 dark:border-white/10 
                  hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 
                  transition-all duration-500 
                  bg-white/70 dark:bg-card-dark/70
                  backdrop-blur-xl
                  group
                  relative
                  overflow-hidden
                ">
                  {/* Glass overlay effect */}
                  <div className="
                    absolute inset-0 
                    bg-gradient-to-br from-white/20 via-blue-50/10 to-transparent 
                    dark:from-white/5 dark:via-blue-950/20 dark:to-transparent
                    pointer-events-none
                  " />

                  <CardHeader className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="
                          text-xl text-foreground dark:text-foreground-dark
                          group-hover:text-blue-600 dark:group-hover:text-blue-400
                          transition-colors duration-300
                        ">
                          {job.role}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-muted-foreground dark:text-muted-dark-foreground">
                          <Briefcase className="h-4 w-4" />
                          {job.companyLink ? (
                            <a
                              href={job.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                font-medium hover:text-blue-600 dark:hover:text-blue-400 
                                transition-colors duration-300 flex items-center space-x-1
                                group/company
                              "
                            >
                              <span>{job.company}</span>
                              <ExternalLink className="
                                h-3 w-3 opacity-0 group-hover/company:opacity-100 
                                transition-opacity duration-300
                              " />
                            </a>
                          ) : (
                            <span className="font-medium">{job.company}</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground dark:text-muted-dark-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {job.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground dark:text-muted-dark-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="
                        bg-blue-50/50 dark:bg-blue-950/30 
                        p-4 rounded-2xl
                        border border-blue-200/30 dark:border-blue-800/30
                        backdrop-blur-sm
                      ">
                        <p className="text-sm">
                          <span className="font-medium text-foreground dark:text-foreground-dark">Technologies: </span>
                          <span className="text-muted-foreground dark:text-muted-dark-foreground">{job.technologies}</span>
                        </p>
                      </div>

                      {/* Projects */}
                      {job.projects.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-foreground dark:text-foreground-dark">Key Projects:</h4>
                          <div className="grid gap-2">
                            {job.projects.map((project) => (
                              <button
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="
                                  text-left p-3 
                                  bg-white/60 dark:bg-white/10 
                                  rounded-2xl 
                                  border border-blue-200/30 dark:border-blue-800/30 
                                  hover:shadow-lg hover:shadow-blue-500/20
                                  transition-all duration-300 
                                  group/project
                                  backdrop-blur-sm
                                  hover:scale-105
                                "
                              >
                                <div className="flex items-center justify-between">
                                  <span className="
                                    font-medium text-foreground dark:text-foreground-dark 
                                    group-hover/project:text-blue-600 dark:group-hover/project:text-blue-400
                                    transition-colors duration-300
                                  ">
                                    {project.name}
                                  </span>
                                  <ExternalLink className="
                                    h-4 w-4 text-muted-foreground dark:text-muted-dark-foreground 
                                    group-hover/project:text-blue-600 dark:group-hover/project:text-blue-400
                                  " />
                                </div>
                                <p className="text-sm text-muted-foreground dark:text-muted-dark-foreground mt-1">{project.description}</p>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Volunteer Experience Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="text-center mb-8">
          <h3 className="
            text-2xl font-bold mb-2
            bg-gradient-to-r from-foreground via-red-500 to-foreground 
            dark:from-foreground-dark dark:via-red-400 dark:to-foreground-dark 
            bg-clip-text text-transparent
          ">
            Volunteer Experience
          </h3>
          <p className="text-muted-foreground dark:text-muted-dark-foreground">
            Giving back to the community
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="
            absolute left-8 top-0 bottom-0 w-1 
            bg-gradient-to-b from-red-500 via-red-400 to-red-300 
            dark:from-red-400 dark:via-red-500 dark:to-red-600
            rounded-full
            shadow-lg shadow-red-500/25
          "></div>

          {volunteerExperience.map((volunteer) => (
            <div key={volunteer.id} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="
                absolute left-6 w-6 h-6 
                bg-gradient-to-br from-red-500 to-red-600 
                dark:from-red-400 dark:to-red-500 
                rounded-full border-4 border-white 
                dark:border-background-dark 
                shadow-xl shadow-red-500/30 
                z-10
              "></div>

              {/* Content */}
              <div className="ml-20">
                <Card className="
                  border-white/20 dark:border-white/10 
                  hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-400/10 
                  transition-all duration-500 
                  bg-white/70 dark:bg-card-dark/70
                  backdrop-blur-xl
                  group
                  relative
                  overflow-hidden
                ">
                  {/* Glass overlay effect */}
                  <div className="
                    absolute inset-0 
                    bg-gradient-to-br from-white/20 via-red-50/10 to-transparent 
                    dark:from-white/5 dark:via-red-950/20 dark:to-transparent
                    pointer-events-none
                  " />

                  <CardHeader className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="
                          text-xl text-foreground dark:text-foreground-dark
                          group-hover:text-red-600 dark:group-hover:text-red-400
                          transition-colors duration-300
                        ">
                          {volunteer.role}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-muted-foreground dark:text-muted-dark-foreground">
                          <Heart className="h-4 w-4" />
                          {volunteer.organizationLink ? (
                            <a
                              href={volunteer.organizationLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                font-medium hover:text-red-600 dark:hover:text-red-400 
                                transition-colors duration-300 flex items-center space-x-1
                                group/org
                              "
                            >
                              <span>{volunteer.organization}</span>
                              <ExternalLink className="
                                h-3 w-3 opacity-0 group-hover/org:opacity-100 
                                transition-opacity duration-300
                              " />
                            </a>
                          ) : (
                            <span className="font-medium">{volunteer.organization}</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground dark:text-muted-dark-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{volunteer.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{volunteer.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-4">
                      <p className="text-muted-foreground dark:text-muted-dark-foreground">
                        {volunteer.description}
                      </p>

                      <ul className="space-y-2">
                        {volunteer.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <ArrowRight className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground dark:text-muted-dark-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </PageTransition>
  )
} 