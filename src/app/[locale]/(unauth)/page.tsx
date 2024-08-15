import { getTranslations } from 'next-intl/server';

import SectionFour from '@/components/Landing/SectionFour';
import SectionOne from '@/components/Landing/SectionOne';
import SectionThree from '@/components/Landing/SectionThree';
import SectionTwo from '@/components/Landing/SectionTwo';
import Section from '@/components/Section/Section';

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
    <div className="mb-2 flex size-full flex-col justify-center">
      <Section id="home" first classes="sm:px-6 md:py-12  lg:px-8 lg:py-20">
        <SectionOne />
      </Section>
      <Section id="features" classes="sm:px-6 md:py-6 lg:px-8 lg:py-12">
        <SectionTwo />
      </Section>
      <Section id="testimonials" classes="sm:px-6 md:py-6 lg:px-8 lg:py-12">
        <SectionThree />
      </Section>
      <Section
        id="pricing"
        classes="mt-8 sm:mt-10 sm:px-6 md:py-6 lg:px-8 lg:py-12"
      >
        <SectionFour />
      </Section>
    </div>
  );
}
