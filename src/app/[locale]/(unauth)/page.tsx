import { getTranslations } from 'next-intl/server';

import SectionOne from '@/components/landing/SectionOne';
import SectionTwo from '@/components/landing/SectionTwo';

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
    <div className="mb-4 flex size-full justify-center pt-10 ">
      <div
        className="container relative mx-auto mb-4 mt-24 flex h-full flex-col items-center justify-center 
      text-center sm:mt-24 lg:mt-0 xl:mt-0 "
      >
        <SectionOne />
        <SectionTwo />
      </div>
    </div>
  );
}
