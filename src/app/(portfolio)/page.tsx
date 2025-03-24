import { Form } from '@/components/form'
import { ServiceList } from '@/components/serviceList'
import { SkillList } from '@/components/skillList'
import { Title } from '@/components/title'
import { WorkList } from '@/components/workList'
import { getBase } from '@/services/base'
import Image from 'next/image'

export default async function Home() {
  const base = await getBase()
  const { fv, about_detail, about_image, skills, services, works } = base

  return (
    <div className="flex flex-col gap-20 pb-20">
      <div className="opacity-70">
        <Image src={fv.url} alt="ファーストビュー" width={fv.width} height={fv.height} />
      </div>
      <section id="about">
        <div className="w-inner mx-auto max-w-xl md:max-w-3xl">
          <Title title="about" subtitle="私について" />
          <div className="flex flex-col items-center justify-center gap-x-10 gap-y-4 md:flex-row">
            <div className="w-1/3 md:w-1/4">
              <Image
                src={about_image.url}
                alt="プロフィール画像"
                width={about_image.width}
                height={about_image.height}
              />
            </div>
            <div className="flex-1">
              <p className="text-justify text-sm md:text-base">{about_detail}</p>
            </div>
          </div>
        </div>
      </section>
      {skills && (
        <section id="skills">
          <div className="md:w-inner mx-auto max-w-3xl">
            <Title title="skills" subtitle="スキル" />
            <SkillList skills={skills} />
          </div>
        </section>
      )}
      {services && (
        <section id="services">
          <div className="w-inner mx-auto max-w-xl md:max-w-6xl">
            <Title title="services" subtitle="サービス" />
            <ServiceList services={services} />
          </div>
        </section>
      )}
      {works && (
        <section id="works">
          <div className="mx-auto max-w-6xl">
            <Title title="works" subtitle="制作実績" />
            <WorkList works={works} />
          </div>
        </section>
      )}
      <section id="contact">
        <div className="w-inner mx-auto max-w-3xl">
          <Title title="contact" subtitle="お問い合わせ" />
          <Form />
        </div>
      </section>
    </div>
  )
}
