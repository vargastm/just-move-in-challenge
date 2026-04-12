import logoSvg from '../../assets/justmovein.svg'

const categories = [
  'Bundles',
  'Energy',
  'Broadband',
  'Insurance',
  'Additional services',
  'Vouchers',
] as const

const menuPurple = '#4B39D8'
const menuLavender = '#F0F0FF'

export type MarketplaceHeaderProps = {
  activeCategory?: (typeof categories)[number]
}

function JaySparkleMark() {
  return (
    <svg
      width={28}
      height={14}
      viewBox="0 0 28 14"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        fill="#EF4444"
        d="M7 0l1.15 3.5L12 4.2 8.5 6.8 9.65 10.5 7 8.05 4.35 10.5 5.5 6.8 2 4.2l3.85-.7L7 0Z"
      />
      <path
        fill="#6D28D9"
        d="M22.5 1.5l.55 1.7L25 3.6l-1.9 1.35.7 2.15-1.85-1.35L19.2 7.1l.7-2.15-1.9-1.35 2.35-.4.55-1.7Z"
      />
      <path
        fill="#7C3AED"
        d="M17 6.5l.45 1.35L19 8.1l-1.45 1 .55 1.65L17 9.9l-1.55 1.15.55-1.65-1.45-1 1.8-.25L17 6.5Z"
      />
    </svg>
  )
}

export function MarketplaceHeader({
  activeCategory = 'Energy',
}: MarketplaceHeaderProps) {
  return (
    <header className="shrink-0 md:bg-white md:px-10 md:pt-7 md:pb-8">
      <div className="md:hidden">
        <div className="rounded-t-[22px] bg-white px-3 pt-3">
          <div className="grid grid-cols-[2.5rem_1fr_2.5rem] items-center gap-x-2.5 pb-3">
            <button
              type="button"
              className="col-start-1 flex size-10 shrink-0 items-center justify-center justify-self-start rounded-lg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              style={{ backgroundColor: menuLavender }}
              aria-label="Abrir menu"
              onClick={() => {
                alert('Menu - future feature')
              }}
            >
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke={menuPurple}
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="col-start-2 m-auto w-[190px]">
              <div className="mx-auto w-full max-w-md rounded-full bg-linear-to-r from-orange-500 via-rose-500 to-[#4B39D8] p-px">
                <div className="flex min-h-10 items-center gap-2 rounded-full bg-white px-3 py-2">
                  <span className="min-w-0 truncate text-[13px] text-zinc-400">
                    Ask me anything...
                  </span>
                  <span className="flex shrink-0 items-center gap-1">
                    <span className="text-[13px] font-bold tracking-tight text-zinc-900">
                      Jay
                    </span>
                    <JaySparkleMark />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-start-3" aria-hidden />
          </div>
        </div>

        <div className="bg-white px-4 pb-5 md:pt-4">
          <a
            href="/"
            className="hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] md:inline-block"
          >
            <img
              src={logoSvg}
              alt="Just Move In"
              width={95}
              height={16}
              className="h-4 w-auto"
            />
          </a>
          <h1 className="mb-3 text-[24px] leading-tight font-bold tracking-tight text-black md:mt-4">
            Marketplace
          </h1>
          <nav
            aria-label="Marketplace categories"
            className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
          >
            {categories.map((label) => {
              const active = label === activeCategory
              return (
                <button
                  key={label}
                  type="button"
                  className="h-[34px] shrink-0 rounded-lg px-3 text-xs font-medium whitespace-nowrap text-black transition-colors"
                  style={{
                    backgroundColor: active ? '#E5E7EB' : '#F3F4F6',
                  }}
                  aria-pressed={active}
                >
                  {label}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      <div className="hidden max-w-full flex-col items-start md:flex">
        <a
          href="/"
          className="block shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
        >
          <img
            src={logoSvg}
            alt="Just Move In"
            width={95}
            height={16}
            className="h-4 w-auto"
          />
        </a>
        <h1 className="mt-6 mb-4 text-[28px] leading-tight font-bold tracking-tight text-black md:text-[32px]">
          Marketplace
        </h1>
        <nav
          aria-label="Marketplace categories"
          className="flex flex-wrap gap-2.5"
        >
          {categories.map((label) => {
            const active = label === activeCategory
            return (
              <button
                key={label}
                type="button"
                className="h-[34px] rounded-lg px-3 text-xs font-medium text-black transition-colors"
                style={{
                  backgroundColor: active ? '#E5E7EB' : '#F3F4F6',
                }}
                aria-pressed={active}
              >
                {label}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
