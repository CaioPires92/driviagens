import httpStatus from 'http-status'

export default function errorHandler(error, req, res, next) {
  console.log(error)

  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send('desculpe, algo deu errado')
}
