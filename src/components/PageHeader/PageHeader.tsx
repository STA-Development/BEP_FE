export const PageHeader = ({
  title,
  breadcrumbs = false,
}: {
  title: string
  breadcrumbs?: boolean
}) => {
  return (
    <div className="mt-10 mb-7.5 flex items-center justify-between">
      <h1 className="text-xl">{title}</h1>
      {breadcrumbs ? (
        <ul className="flex text-base text-black-light ">
          <li className="after:mx-2.5 after:content-['\/']">Home</li>
          <li>Masters</li>
        </ul>
      ) : null}
    </div>
  )
}
