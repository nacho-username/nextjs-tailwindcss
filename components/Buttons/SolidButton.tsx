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
    <Link
      href={`/${href}`}
      className={`py-3 px-8 rounded-xl font-bold text-xs uppercase transition duration-300 ease-in-out ${classes}`}
    >
      {label}
    </Link>
  )
}
