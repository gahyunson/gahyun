import Badge from '../ui/Badge'
import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'
import type { ResumeData } from '../../types'

interface SkillsProps {
  data: ResumeData['skills']
}

const levelOrder = { expert: 0, advanced: 1, intermediate: 2, beginner: 3 }

export default function Skills({ data }: SkillsProps) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-white py-20 dark:bg-gray-950 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          id="skills-heading"
          title="Skills"
          subtitle="사용하는 기술 스택입니다"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.map(category => (
            <Card key={category.title} hover padding="md">
              {/* Category header */}
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">{category.icon}</span>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <ul
                className="flex flex-wrap gap-2"
                aria-label={`${category.title} 기술 목록`}
              >
                {[...category.skills]
                  .sort((a, b) => levelOrder[a.level] - levelOrder[b.level])
                  .map(skill => (
                    <li key={skill.name}>
                      <Badge label={skill.name} level={skill.level} />
                    </li>
                  ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <div
          className="mt-8 flex flex-wrap items-center gap-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900"
          aria-label="숙련도 범례"
        >
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">숙련도:</span>
          {(['expert', 'advanced', 'intermediate', 'beginner'] as const).map(level => (
            <Badge key={level} label={level === 'expert' ? 'Expert' : level === 'advanced' ? 'Advanced' : level === 'intermediate' ? 'Intermediate' : 'Beginner'} level={level} />
          ))}
        </div>
      </div>
    </section>
  )
}
