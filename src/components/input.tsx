import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputRootProps extends ComponentProps<'input'> {
  error?: boolean
}

export function InputRoot({
  error = false,
  className,
  ...props
}: InputRootProps) {
  return (
    <div
      data-error={error}
      className={twMerge(
        'group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 transition-colors duration-300 focus-within:border-gray-100 data-[error=true]:border-danger',
        className
      )}
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-400 transition-colors duration-300 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}
