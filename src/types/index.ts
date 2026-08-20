export interface Skill {
  name: string
  level: 'expert' | 'advanced' | 'intermediate' | 'beginner'
}

export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: { start: string; end: string }
  location: string
  description: string
  technologies: string[]
  achievements: string[]
  current?: boolean
}

export interface ProjectItem {
  id: string
  title: string
  summary: string
  contribution: string
  highlights?: {
    title: string
    description: string
  }[]
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  imageAlt?: string
  featured?: boolean
}

export interface EducationItem {
  id: string
  type: 'education' | 'certificate' | 'award'
  title: string
  institution: string
  period: string
  description?: string
}

export interface ResumeData {
  personal: {
    name: string
    nameEn: string
    tagline: string
    email: string
    github: string
    linkedin: string
    blog: string
    resumePdfUrl: string
    resumeWordUrl: string
    coreTechnologies: string[]
  }
  about: {
    paragraphs: string[]
    strengths: {
      icon: string
      title: string
      description: string
    }[]
  }
  skills: SkillCategory[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  education: EducationItem[]
}
