'use client'
type Props = {
  value: string;
  label: string;
  error?: string;
  name: string;
  inputStyle?: React.CSSProperties;
  onChange: (e: any) => void;
};

export default function Input({ value, label, name, error, onChange, inputStyle }: Props) {
  return (
    <div className="">
      <p className="text-white mb-1 text-[15px] ">{label}</p>
      <div className="h-12 relative">
        <input style={inputStyle} type="text" name={name} value={value} onChange={onChange} className={`h-full text-[15px]  pl-3 outline-none w-full rounded-lg border-2 ${error ? "border-red-500" : "border-gray-300"} duration-300`} />
      </div>
      <p className={`grid ${error ? 'min-h-5 opacity-100' : 'h-0 opacity-0'} overflow-hidden duration-300 text-red-500`}>{error}</p>
    </div>
  )
}
