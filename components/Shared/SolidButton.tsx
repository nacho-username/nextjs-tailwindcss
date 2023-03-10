import Link from 'next/link'

interface Props {
  label: string
  href: string
  icon?: string
  classes?: string
}

export const SolidButton: React.FC<Props> = ({
  label,
  href,
  icon,
  classes,
}) => {
  return (
    //   <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    //   <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    //   <span class="relative text-black group-hover:text-white">Hover me!</span>
    // </button>
    <Link
      href={`/${href}`}
      className={`w-48 rounded-tl-lg rounded-br-lg font-bold text-xs uppercase inline-block relative overflow-hidden group ${classes}`}
    >
      <div className='absolute inset-0 w-0 bg-green transition-all duration-[250ms] ease-out group-hover:w-full'></div>
      <div className='relative group-hover:text-white'>{label}</div>
    </Link>
  )
}
