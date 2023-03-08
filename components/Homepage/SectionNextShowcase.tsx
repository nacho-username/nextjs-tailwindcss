interface nextShowcaseProps {
  title: string
}

export default function SectionNextShowcase({
  nextShowcaseData,
}: {
  nextShowcaseData: nextShowcaseProps
}) {
  const { title } = nextShowcaseData
  return (
    <div className='bg-beige text-center px-16 text-deep-grey'>
      <h3 className='w-[80%] md:w-2/3 mx-auto uppercase text-4xl'>{title}</h3>
    </div>
  )
}
