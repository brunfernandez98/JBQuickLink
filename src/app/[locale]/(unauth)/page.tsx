import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import SectionOne from '@/components/landing/SectionOne';
import SectionTwo from '@/components/landing/SectionTwo';
import Section from '@/components/Section/Section';

import profilePic from '../../../../public/background.png';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <div className="mb-2 flex size-full justify-center">
      <Image
        className="pointer-events-none absolute inset-x-0 top-0 z-0 select-none opacity-60 mix-blend-lighten"
        alt="Picture of the author"
        src={profilePic}
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
      />
      <div className="z-20 mx-auto mb-4">
        <Section
          id="home"
          first
          classes="relative z-40 mx-auto flex max-w-7xl flex-col overflow-hidden px-4 sm:items-center sm:justify-center lg:px-8"
        >
          <SectionOne />
        </Section>
        <Section>
          <SectionTwo />
        </Section>
      </div>
    </div>
  );
}
