import logoSvg from '../../assets/justmovein.svg'

const categories = [
  'Bundles',
  'Energy',
  'Broadband',
  'Insurance',
  'Additional services',
  'Vouchers',
] as const

export type MarketplaceHeaderProps = {
  activeCategory?: (typeof categories)[number]
}

export function MarketplaceHeader({
  activeCategory = 'Energy',
}: MarketplaceHeaderProps) {
  return (
    <header className="bg-white px-8 pt-7 pb-8">
      <div className="flex max-w-full flex-col items-start">
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
