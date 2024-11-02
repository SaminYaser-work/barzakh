import { useId } from 'react'

type ToggleProps = {
  label: string
  checked: boolean
  onChange: (value: boolean) => void
}

export default function Toggle({ label, checked, onChange }: ToggleProps) {
  const labelledById = useId()
  const id = useId()

  return (
    <label
      htmlFor={id}
      className="flex items-center justify-between w-full cursor-pointer"
    >
      <span id={labelledById} className="font-medium text-md text-slate-50">
        {label}
      </span>
      <input
        id={id}
        type="checkbox"
        className="switch"
        checked={checked}
        aria-labelledby={labelledById}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  )
}
