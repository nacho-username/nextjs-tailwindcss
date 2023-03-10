import PropTypes from 'prop-types'
import Link from 'next/link'

interface Props {
  label: string
  href: string
  icon?: string
  classes?: string
}

export const BorderButton: React.FC<Props> = ({
  label,
  href,
  icon,
  classes,
}) => {
  return (
    <Link
      href={`/${href}`}
      className={`border-2 w-48 border-teal-300 py-3 px-8 rounded-tl-lg rounded-br-lg font-bold text-xs uppercase  inline-block relative overflow-hidden group ${classes}`}
    >
      <div className='absolute inset-0 w-0 bg-green transition-all duration-[250ms] ease-out group-hover:w-full'></div>
      <div className='relative group-hover:text-dark-grey text-center'>
        {label}
      </div>
    </Link>
  )
}
{
}
