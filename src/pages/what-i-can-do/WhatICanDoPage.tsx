import { Code, Database, Cloud, Wrench, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { skillCategories } from '@/data'

const iconMap = {
  Code: <Code className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Cloud: <Cloud className="h-5 w-5" />,
  Wrench: <Wrench className="h-5 w-5" />,
}

export const WhatICanDoPage = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What I Can Do</h2>
        <p className="text-muted-foreground dark:text-muted-dark-foreground">Comprehensive expertise across the technology stack</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border-border dark:border-border-dark hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary-dark/5 transition-all duration-300 bg-card dark:bg-card-dark">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-muted dark:bg-muted-dark rounded-lg text-foreground dark:text-foreground-dark">
                  {iconMap[category.icon as keyof typeof iconMap]}
                </div>
                <div>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 p-2 bg-gradient-to-r from-muted to-secondary dark:from-muted-dark dark:to-secondary-dark rounded-lg border border-border dark:border-border-dark hover:shadow-md transition-all duration-200"
                  >
                    <Star className="h-3 w-3 text-accent-foreground dark:text-accent-dark-foreground" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 