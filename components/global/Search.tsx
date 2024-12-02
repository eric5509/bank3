import { BsSearch } from 'react-icons/bs'
export default function Search() {
  return (
    <div className="h-12 w-64 rounded-lg shadow-md relative border-2">
      <span className="text-sm absolute top-1/2 left-3 -translate-y-1/2">
        <BsSearch />
      </span>
      <input type="text" className='h-full w-full outline-none pl-9 bg-transparent' placeholder='Search...' />
    </div>
  )
}