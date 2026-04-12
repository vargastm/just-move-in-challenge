import energyCompany2 from '../assets/energy_company_2.svg'
import type {
  EnergyPlanProps,
  EnergyPlanUnitRatesDetailsProps,
} from '../components/EnergyPlan'

export const energyPlanUnitRatesMock: EnergyPlanUnitRatesDetailsProps = {
  electricity: {
    unitRate: '24.50p/kWh',
    standingCharge: '52.12p/day',
  },
  gas: {
    unitRate: '7.42p/kWh',
    standingCharge: '28.34p/day',
  },
}

export const energyPlanMock: Omit<
  EnergyPlanProps,
  'onChoosePlan' | 'onViewRates' | 'ratesDetails'
> = {
  savingsBannerText: '£35 annual savings, £20 voucher',
  isTopPick: false,
  planName: 'BG Plan A',
  supplierLogoSrc: energyCompany2,
  contractMonthsLabel: '12 month contract',
  planTypeTag: 'TRACKER',
  showBCorpBadge: true,
  renewablePercent: 85.5,
  estimatedMonthlyElectricityCost: 40.94,
  estimatedAnnualElectricityCost: 491,
}
