const preparationTime = 10

export const formatter = (text) => {
  if (typeof text === 'string') {
    const splitText = text.split(' ')
    return parseInt(splitText[0]) + preparationTime
  }

  return text
}
