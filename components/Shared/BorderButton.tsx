import PropTypes from 'prop-types'
import Link from 'next/link'

interface Props {
  label: string
  href: string
  icon?: string
}

export const BorderButton: React.FC<Props> = ({ label, href, icon }) => {
  return (
    <Link
      href={`/${href}`}
      className='border-2 border-teal-300 py-3 px-8 rounded-tl-lg rounded-br-lg font-bold text-xs uppercase hover:bg-teal-300 hover:text-slate-900 inline-block transition-scale ease-in delay-75 hover:scale-95'
    >
      {label}
    </Link>
  )
}
