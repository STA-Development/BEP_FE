interface ExampleListParams {
  id: string
  page: number
  value: string
}

const registerFunction = (params: ExampleListParams) => {
  const { page, value } = params

  return value[page]
}

const registerHelpers = {
  registerFunction,
}

export default registerHelpers
