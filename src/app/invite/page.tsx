import Image from 'next/image'

import logo from '@/assets/logo.svg'

import { InviteLinkInput } from './invite-link-input'
import { Ranking } from './ranking'
import { Stats } from './stats'

export default function InvitePage() {
  const inviteLink = 'devstage.com/codecraft-summit-2025/1289'

  return (
    <div className="min-h-dvh flex flex-col gap-10 items-center md:pt-24 md:items-start">
      <Image src={logo} alt="devstage" width={108.5} height={30} />

      <div className="w-full flex items-center justify-between gap-16 flex-col md:flex-row">
        <div className="flex flex-col gap-10 w-full max-w-[550px]">
          <div className="space-y-2">
            <h2 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
              Inscrição confirmada!
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Para entrar no evento, acesse o link enviado para seu e-mail.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                Indique e Ganhe
              </h2>

              <p className="text-gray-300 leading-relaxed">
                Convide mais pessoas para o evento e concorra a prêmios
                exclusivos! É só compartilhar o link abaixo e acompanhar as
                inscrições:
              </p>
            </div>

            <InviteLinkInput inviteLink={inviteLink} />

            <Stats />
          </div>
        </div>

        <Ranking />
      </div>
    </div>
  )
}
