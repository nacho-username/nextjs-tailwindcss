interface HeaderProps {
  title: string
  description?: string
  dark?: boolean
  classes?: string
  alignment?: string
}

export default function Header({
  title,
  description,
  dark,
  classes,
  alignment,
}: HeaderProps) {
  return (
    <div className={`flex flex-col items-${alignment} ${classes}`}>
      <div
        className={`w-16 h-1 border-0 bg-gradient-to-r from-teal-300 to-teal-900 mb-2`}
      ></div>
      <h3
        className={`uppercase text-sm ${
          dark ? 'text-dark-grey' : 'text-white'
        }`}
      >
        {title}
      </h3>
      <p
        className={`w-[80%] text-lg my-4 md:my-0 md:text-3xl font-bold leading-7 md:leading-10 ${
          dark ? 'text-dark-grey' : 'text-white'
        }`}
      >
        {description}
      </p>
    </div>
  )
}
