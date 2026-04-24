

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { type CastCrewMember } from './data/castCrew.ts'
import { X } from 'lucide-react'

type CastCrewGridProps = {
    members: CastCrewMember[]
}

function CastCrewGrid({ members }: CastCrewGridProps) {
    const [activeMemberId, setActiveMemberId] = useState<string | null>(null)

    const activeMember = members.find((member) => member.id === activeMemberId) ?? null

    useEffect(() => {
        if (!activeMemberId) {
            return
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActiveMemberId(null)
            }
        }

        window.addEventListener('keydown', onKeyDown)

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [activeMemberId])

    useEffect(() => {
        if (!activeMemberId) {
            return
        }

        const previousBodyOverflow = document.body.style.overflow
        const previousHtmlOverflow = document.documentElement.style.overflow

        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousBodyOverflow
            document.documentElement.style.overflow = previousHtmlOverflow
        }
    }, [activeMemberId])

    return (
        <>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {members.map((member) => (
                    <button
                        key={member.id}
                        type='button'
                        onClick={() => setActiveMemberId(member.id)}
                        className='group block text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 cursor-pointer'
                    >
                        <img
                            src={member.imageSrc}
                            alt={`${member.name} portrait`}
                            loading='lazy'
                            decoding='async'
                            className='aspect-square w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]'
                        />
                    </button>
                ))}
            </div>

            {activeMember && createPortal(
                <div
                    className='fixed inset-0 z-999 flex items-center justify-center bg-black/55 p-4'
                    onClick={() => setActiveMemberId(null)}
                    role='dialog'
                    aria-modal='true'
                    aria-labelledby='cast-bio-title'
                >
                    <div
                        className='relative w-full max-w-lg rounded-xl bg-[#f9f7f2] p-6 shadow-2xl'
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type='button'
                            aria-label='Close bio'
                            onClick={() => setActiveMemberId(null)}
                            className='absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/20 text-lg leading-none text-black transition-colors hover:bg-black hover:text-white cursor-pointer'
                        >
                            <X />
                        </button>

                        <h2 id='cast-bio-title' className='font-felt-tip pr-10 text-3xl! text-[#4A4A4C]'>
                            {activeMember.name} ({activeMember.pronouns})
                        </h2>
                        <p className='font-new-order mt-1 text-sm! uppercase tracking-wide text-[#66666A]'>
                            {activeMember.role}
                        </p>
                        <p className='font-new-order mt-4 text-base! leading-relaxed text-[#2D2D30]'>
                            {activeMember.bio}
                        </p>
                    </div>
                </div>,
                document.body,
            )}
        </>
    )
}

export default CastCrewGrid
