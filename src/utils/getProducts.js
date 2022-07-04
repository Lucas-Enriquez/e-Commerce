export const getProducts = async () => {
  const req = await fetch('../../../../products.json', {
    headers:
    { 'Content-Type': 'application/json', Accept: 'application/json' }
  })
  const data = await req.json()

  return data
}
