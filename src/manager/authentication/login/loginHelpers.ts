interface ExampleListParams {
  id: string
  page: number
  value: string
}

const loginFunction = (params: ExampleListParams) => {
  const { page, value } = params

  return value[page]
}

const loginHelpers = {
  loginFunction,
}

export default loginHelpers
