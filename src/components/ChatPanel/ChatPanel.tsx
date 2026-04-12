import { type ReactNode, useId } from 'react'

function StarIcon() {
  const gid = useId().replace(/:/g, '')
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="55%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gid})`}
        d="M12 2l2.2 6.8H21l-5.5 4 2.1 6.7L12 15.4l-5.6 4.1 2.1-6.7L3 8.8h6.8L12 2z"
      />
    </svg>
  )
}

function ReplyArrowIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0 text-zinc-700"
    >
      <path
        d="M7 5v10a2 2 0 0 0 2 2h9"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m15 13 4 4-4 4"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-zinc-900"
    >
      <path
        d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v3M8 22h8"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-zinc-900"
    >
      <path
        d="m22 2-7 20-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2 11 13"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
      />
    </svg>
  )
}

function GradientPill({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-full bg-linear-to-r from-orange-400 via-rose-500 to-violet-600 p-px">
      <div className="flex items-center gap-1.5 rounded-full bg-[#F4F4F5] px-3 py-2 text-sm text-zinc-800">
        {children}
      </div>
    </div>
  )
}

export function ChatPanel() {
  return (
    <aside
      className="flex h-screen w-[500px] shrink-0 flex-col overflow-hidden border-l border-zinc-200 bg-[#ECECED]"
      aria-label="Assistente Ask Jay"
    >
      <header className="shrink-0 border-b border-zinc-100 bg-white px-5 py-4">
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-[15px] font-normal tracking-tight text-zinc-900">
            Ask
          </span>
          <span className="text-[15px] font-bold tracking-tight text-zinc-900">
            Jay
          </span>
          <StarIcon />
          <StarIcon />
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 pt-5 pb-4">
        <div className="inline-block max-w-[85%] rounded-2xl bg-white px-4 py-3 shadow-sm">
          <p className="text-base leading-snug text-zinc-900">...</p>
        </div>
        <div className="mt-5 flex flex-col items-start gap-2.5">
          <GradientPill>
            <ReplyArrowIcon />
            <span>...</span>
          </GradientPill>
          <GradientPill>
            <ReplyArrowIcon />
            <span>...</span>
          </GradientPill>
        </div>
      </div>

      <div className="shrink-0 border-t border-zinc-100 bg-white px-4 py-4">
        <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-3 shadow-sm">
          <input
            type="text"
            readOnly
            placeholder="How can I help you?"
            className="min-w-0 flex-1 bg-transparent text-[15px] text-zinc-900 outline-none placeholder:text-zinc-400"
          />
          <button
            type="button"
            className="shrink-0 p-0.5 opacity-90"
            tabIndex={-1}
            aria-hidden
          >
            <MicIcon />
          </button>
          <button
            type="button"
            className="shrink-0 p-0.5 opacity-90"
            tabIndex={-1}
            aria-hidden
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </aside>
  )
}
