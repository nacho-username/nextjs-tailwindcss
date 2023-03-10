interface HeaderProps {
  title: string
  description?: string
  dark?: boolean
  classes?: string
}

export default function Header({
  title,
  description,
  dark,
  classes,
}: HeaderProps) {
  return (
    <>
      <div
        className={`w-16 h-1 border-0 bg-gradient-to-r from-teal-300 to-teal-900 mb-2 ${classes}`}
      ></div>
      <h3
        className={`uppercase text-sm ${
          dark ? 'text-dark-grey' : 'text-white'
        }`}
      >
        {title}
      </h3>
      <p
        className={`w-[80%] md:w-1/2 text-lg md:text-3xl font-bold leading-7 md:leading-10 ${
          dark ? 'text-dark-grey' : 'text-white'
        }`}
      >
        {description}
      </p>
    </>
  )
}
