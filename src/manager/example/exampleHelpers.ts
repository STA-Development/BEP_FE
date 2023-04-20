interface ExampleListParams {
  id: string
  page: number
  value: string
}

const exampleFunction = (params: ExampleListParams) => {
  const { page, value } = params

  return value[Number(page)]
}

const exampleHelpers = {
  exampleFunction,
}

export default exampleHelpers
