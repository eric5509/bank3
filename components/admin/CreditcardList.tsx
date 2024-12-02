import CreditCard from '../global/CreditCard'

export default function CreditcardList() {
  return (
    <div className='grid grid-cols-3 gap-4'>
        {[1,2,3,4,5].map((element, key) => (
            <CreditCard track={key} key={key}/>
        ))}
    </div>
  )
}
