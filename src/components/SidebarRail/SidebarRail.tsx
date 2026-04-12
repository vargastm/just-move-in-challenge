import { type ReactNode } from 'react'

const railBg = '#F8F9FA'
const border = '#E5E7EB'
const accent = '#5B21B6'
const accentSoft = '#EDE9FE'
const iconMuted = '#18181B'

function IconWrap({
  active,
  children,
}: {
  active?: boolean
  children: ReactNode
}) {
  return (
    <div
      className="flex size-11 items-center justify-center rounded-xl"
      style={{
        backgroundColor: active ? accentSoft : 'transparent',
      }}
    >
      {children}
    </div>
  )
}

export function SidebarRail() {
  return (
    <aside
      className="flex h-dvh min-h-0 w-[72px] shrink-0 flex-col justify-between overflow-hidden border-r py-5"
      style={{
        backgroundColor: railBg,
        borderColor: border,
      }}
      aria-hidden
    >
      <nav className="flex flex-col items-center gap-5">
        <IconWrap active>
          <svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke={accent}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </IconWrap>

        <IconWrap>
          <svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
              stroke={iconMuted}
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v0Z"
              stroke={iconMuted}
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m9 14 2 2 4-4"
              stroke={iconMuted}
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconWrap>

        <IconWrap active>
          <svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <circle cx={9} cy={20} r={1.5} fill={accent} />
            <circle cx={20} cy={20} r={1.5} fill={accent} />
            <path
              d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
              stroke={accent}
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconWrap>

        <IconWrap>
          <svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
              stroke={iconMuted}
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
              stroke={iconMuted}
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6v10M8 8h8"
              stroke={iconMuted}
              strokeWidth={1.75}
              strokeLinecap="round"
            />
          </svg>
        </IconWrap>
      </nav>

      <div className="flex justify-center px-2">
        <div
          className="flex size-10 items-center justify-center rounded-full border bg-white"
          style={{ borderColor: border }}
        >
          <svg
            width={28}
            height={28}
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden
          >
            <circle
              cx={16}
              cy={13}
              r={6}
              stroke={iconMuted}
              strokeWidth={1.5}
            />
            <path
              d="M8 28c0-4.4 3.6-8 8-8s8 3.6 8 8"
              stroke={iconMuted}
              strokeWidth={1.5}
              strokeLinecap="round"
            />
            <path
              d="M12 11h2M18 11h2"
              stroke={iconMuted}
              strokeWidth={1.25}
              strokeLinecap="round"
            />
            <path
              d="M13 15h6"
              stroke={iconMuted}
              strokeWidth={1.25}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </aside>
  )
}
