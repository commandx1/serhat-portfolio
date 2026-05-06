'use client'

const controls = [
  { color: 'bg-[#ff5f57]', label: 'Close' },
  { color: 'bg-[#febc2e]', label: 'Minimize' },
  { color: 'bg-[#28c840]', label: 'Maximize' },
]

export const WindowControls = () => (
  <div className='flex items-center gap-1.5 px-2'>
    {controls.map((control) => (
      <div
        key={control.label}
        aria-label={control.label}
        className={`w-3 h-3 rounded-full ${control.color} hover:brightness-90 cursor-pointer`}
      />
    ))}
  </div>
)
