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
      className={`border-2 border-teal-300 py-3 px-8 rounded-tl-lg rounded-br-lg font-bold text-xs uppercase hover:bg-teal-300 inline-block transition-scale ease-in delay-75 hover:scale-95 ${classes}`}
    >
      {label}
    </Link>
  )
}
