'use client'

import { Check, Copy, Link } from 'lucide-react'

import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { useState } from 'react'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  const [isCopied, setIsCopied] = useState(false)

  function handleCopyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
    setIsCopied(true)

    setTimeout(() => setIsCopied(false), 3000)
  }

  const Icon = isCopied ? Check : Copy

  return (
    <InputRoot className="focus-within:border-gray-600">
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField defaultValue={inviteLink} readOnly />

      <IconButton className="-mr-2" onClick={handleCopyInviteLink}>
        <Icon className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
