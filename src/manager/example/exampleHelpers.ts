interface ExampleListParams {
  id: string
  page: number
  value: string
}

const exampleFunction = (params: ExampleListParams) => {
  const { page, value } = params

  return value[page]
}

const exampleHelpers = {
  exampleFunction,
}

export default exampleHelpers
