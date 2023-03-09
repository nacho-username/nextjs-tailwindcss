interface HeaderProps {
  title: string
  description?: string
  dark?: boolean
}

export default function Header({ title, description, dark }: HeaderProps) {
  return (
    <>
      <div className='w-16 h-1 mx-auto border-0  bg-gradient-to-r from-teal-300 to-teal-900 mb-4'></div>
      <h3
        className={`uppercase text-sm ${
          dark ? 'text-dark-grey' : 'text-white'
        }`}
      >
        {title}
      </h3>
      <p
        className={`w-[80%] md:w-1/2 mx-auto text-lg md:text-3xl font-bold pt-4 leading-7 md:leading-10 ${
          dark ? 'text-dark-grey' : 'text-white'
        }`}
      >
        {description}
      </p>
    </>
  )
}
