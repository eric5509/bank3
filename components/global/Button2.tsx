type Props = {
  style?: React.CSSProperties
  loading?: boolean
  end?: boolean
  title: string
  submit?: () => any
}

export default function Button2({ style, submit, loading, end, title }: Props) {
  return (
    <div className={`flex ${end && "justify-end"}`}>
      <button disabled={loading} onClick={submit} style={style} className={`w-32 h-12 grid place-content-center duration-300 rounded-full ${loading ? 'bg-transparent ' : 'bg-green-500 hover:scale-105 active:scale-100'} border-2 text-white font-semibold text-sm`}>
        {loading ? <span className="loader"></span> : <span>{title}</span>}
      </button>
    </div>
  )
}
