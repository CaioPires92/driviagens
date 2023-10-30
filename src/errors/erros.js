function conflict(resource = 'item') {
  return { type: `this ${resource}', message: 'mensagem generica` }
}

export const errors = {conflict}
