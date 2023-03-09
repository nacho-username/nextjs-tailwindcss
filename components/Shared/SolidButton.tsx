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
      className={`rounded-tl-lg rounded-br-lg font-bold text-xs uppercase inline-block transition-scale ease-in delay-75 hover:scale-95 ${classes}`}
    >
      {label}
    </Link>
  )
}
