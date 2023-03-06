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
      className='border-2 border-green-300 py-3 px-8 rounded-full font-bold text-xs uppercase hover:bg-green-300 hover:text-slate-900 transition duration-300 ease-in-out'
    >
      {label}
    </Link>
  )
}
