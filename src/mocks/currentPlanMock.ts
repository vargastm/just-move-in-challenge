import energyCompany1 from '../assets/energy_company_1.svg'
import type { CurrentPlanProps } from '../components/CurrentPlan'

export const currentPlanMock: Omit<
  CurrentPlanProps,
  'onEdit' | 'onViewPlanDetails' | 'className'
> = {
  planName: 'BG Energy Simpler Energy',
  supplierLogoSrc: energyCompany1,
  tariff: 'Standard Variable Tariff',
  address: 'Flat 3, The Cooper Building, 36 Wharf Road',
  mpan: '1200061549209',
  showExitFeeBanner: true,
  usageSummary: 1421,
}
