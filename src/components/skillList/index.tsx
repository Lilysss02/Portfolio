import { Skill } from '@/type/base'
import './style.css'

type Props = {
  skills: Skill[]
}

export const SkillList = ({ skills }: Props) => {
  return (
    <ul className="about__skills mx-auto flex flex-wrap justify-center gap-2 text-center md:gap-5">
      {skills?.map((skill: Skill) => (
        <li key={skill.name}>
          <p className="text-sm">{skill.name}</p>
          <div
            className={`graph before:bg-radial-gradient before:from-primary relative m-2 inline-grid aspect-square place-content-center text-lg font-bold before:absolute before:inset-0 before:top-0 before:right-0 before:bottom-0 before:left-0 before:rounded-full before:bg-gradient-to-t before:to-transparent after:absolute after:rounded-full w-25`}
            style={
              {
                '--percent': `${skill.proficiency}`,
              } as React.CSSProperties
            }
          >
            {skill.proficiency}%
          </div>
        </li>
      ))}
    </ul>
  )
}
