import { useRouter } from 'next/router'

const Area = () => {
  const router = useRouter()
  console.log(router.query)

  return (
    <>
      <h1>Area: </h1>
    </>
  )
}

export default Area
