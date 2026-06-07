import { Category, Tool } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'hive-planning', title: 'Hive Planning', description: 'Plan the size, structure, and placement of your colonies.', icon: 'Layout' },
  { id: 'honey-production', title: 'Honey Production', description: 'Estimate yields based on colony size, climate, and forage flow.', icon: 'Droplet' },
  { id: 'swarm-timing', title: 'Swarm Timing', description: 'Forecast swarm behavior and implement preventive management.', icon: 'Wind' },
  { id: 'queen-timing', title: 'Queen Timing', description: 'Track mating, laying progression, and replacement schedules.', icon: 'Crown' },
  { id: 'cost-planning', title: 'Cost Planning', description: 'Budget for apiary equipment, feeding, health treatments, and expansion.', icon: 'DollarSign' },
  { id: 'season-planning', title: 'Apiary Season Planning', description: 'Month-to-month management strategies for your region.', icon: 'CalendarDays' },
  { id: 'feed-sugar', title: 'Feed / Sugar Solution', description: 'Calculate precise syrup ratios and feed volumes for wintering or stimulation.', icon: 'Beaker' },
  { id: 'harvest-planning', title: 'Harvest Planning', description: 'Timeline extraction, bottling phases, and equipment staging.', icon: 'Tractor' },
];

export const TOOLS: Tool[] = [
  {
    id: 't-honey-estimator',
    title: 'Honey Production Estimator',
    description: 'Calculate potential honey yield based on colony strength, regional nectar flow duration, and average weather conditions.',
    category: 'honey-production',
    primaryOutcome: 'Estimated harvest in lbs/kg',
    icon: 'Droplet',
  },
  {
    id: 't-hive-cost',
    title: 'Hive Cost Calculator',
    description: 'Itemize expenditures for woodenware, frames, foundation, bees, and initial protective gear to determine per-hive setup cost.',
    category: 'cost-planning',
    primaryOutcome: 'Total initial and recurring costs',
    icon: 'DollarSign',
  },
  {
    id: 't-swarm-planner',
    title: 'Swarm Timing Planner',
    description: 'Use local temperature data and colony population density flags to predict peak swarming weeks and plan splits.',
    category: 'swarm-timing',
    primaryOutcome: 'High-risk swarm dates identified',
    icon: 'Wind',
  },
  {
    id: 't-queen-timeline',
    title: 'Queen Development Timeline',
    description: 'Track the 16-day cycle from egg to emerged queen, including mating flight windows and first laying expectations.',
    category: 'queen-timing',
    primaryOutcome: 'Key dates for grafting & emergence',
    icon: 'Crown',
  },
  {
    id: 't-syrup-mixer',
    title: 'Sugar Syrup Mixing Calculator',
    description: 'Calculate required sugar and water quantities by weight or volume to achieve precise 1:1 or 2:1 feeding ratios.',
    category: 'feed-sugar',
    primaryOutcome: 'Required ingredient amounts',
    icon: 'Beaker',
  },
  {
    id: 't-apiary-setup',
    title: 'Apiary Setup Planner',
    description: 'Determine optimal hive spacing, windbreak requirements, and water source proximity for a new yard.',
    category: 'hive-planning',
    primaryOutcome: 'Yard layout recommendations',
    icon: 'Layout',
  },
  {
    id: 't-harvest-yield',
    title: 'Honey Harvest Yield Calculator',
    description: 'Estimate final bottled volume based on the number of full deep or medium supers ready for extraction.',
    category: 'harvest-planning',
    primaryOutcome: 'Number of bottles/buckets expected',
    icon: 'Tractor',
  },
  {
    id: 't-season-checklist',
    title: 'Seasonal Hive Action Checklist',
    description: 'Generate a month-by-month checklist adapted to your hardiness zone for varroa treatments, feeding, and inspections.',
    category: 'season-planning',
    primaryOutcome: 'Customized management calendar',
    icon: 'CalendarDays',
  },
];
