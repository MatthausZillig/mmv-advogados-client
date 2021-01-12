import { useRouter } from 'next/router'

const Area = () => {
  const router = useRouter()
  console.log(router)

  return (
    <>
      <h1>Area: </h1>
    </>
  )
}

export default Area
