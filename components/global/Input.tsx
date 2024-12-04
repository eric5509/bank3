'use client'
type Props = {
  value: string;
  label: string;
  error?: string;
  labelStyle?: React.CSSProperties;
  name: string;
  inputStyle?: React.CSSProperties;
  password?: boolean
  number?: boolean
  hideInputIcon?: boolean
  border?: boolean
  onChange: (e: any) => void;
};

export default function Input({ value, label, name,labelStyle,password,border, hideInputIcon, error,number, onChange, inputStyle }: Props) {
  return (
    <div className="">
      <p style={labelStyle} className="text-white mb-1 text-[15px] ">{label}</p>
      <div className="h-12 relative">
        <input style={inputStyle} type={password ? "password": number ? 'number' : 'text'} name={name} value={value} onChange={onChange} className={`h-full text-[15px]  pl-3 outline-none w-full appearance-none rounded-lg ${border ? 'border': 'border-2'} ${error ? "border-red-500" : "border-gray-300"} duration-300`} />
        {hideInputIcon && <div className="bg-white absolute top-1 bottom-1 right-0.5 w-10"></div>}
      </div>
      <p className={`grid ${error ? 'min-h-5 opacity-100' : 'h-0 opacity-0'} text-sm mt-1 overflow-hidden duration-300 text-red-500`}>{error}</p>
    </div>
  )
}
