import { useEffect } from 'react'
import { useCakeBusdPrice } from 'hooks/useBUSDPrice'
import { usePriceCakeBusd } from 'state/farms/hooks'

const useGetDocumentTitlePrice = () => {
  const cakePriceBusd = usePriceCakeBusd()
  useEffect(() => {
    const cakePriceBusdString = cakePriceBusd ? cakePriceBusd.toFixed(2) : ''
    document.title = `Pancake Swap - ${cakePriceBusdString}`
  }, [cakePriceBusd])
}
export default useGetDocumentTitlePrice
