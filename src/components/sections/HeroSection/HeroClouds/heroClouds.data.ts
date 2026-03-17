export type HeroCloudItem = {
  id: string
  src: string
  width: number
  height: number
  top: number
  left: number
  rotate?: number
  layer: number
}

const CLOUD_TRANS_SRC = '/assets/sections/HeroSection/cloud-trans.png'
const CLOUD_BASE_SRC = '/assets/sections/HeroSection/Cloud_01.png'

export const HERO_CLOUDS: HeroCloudItem[] = [
  // Transparent clouds - left
  {
    id: 'cloud-trans-left-01',
    src: CLOUD_TRANS_SRC,
    width: 2173.76,
    height: 481.85,
    top: 910.6,
    left: -153,
    layer: 1
  },
  {
    id: 'cloud-trans-left-02',
    src: CLOUD_TRANS_SRC,
    width: 2284,
    height: 506,
    top: 902,
    left: -115,
    layer: 3
  },

  // Transparent clouds - right (flipped)
  {
    id: 'cloud-trans-right-01',
    src: CLOUD_TRANS_SRC,
    width: 1421.46,
    height: 481.85,
    top: 910.6,
    left: 599.3,
    rotate: 180,
    layer: 2
  },
  {
    id: 'cloud-trans-right-02',
    src: CLOUD_TRANS_SRC,
    width: 1421.46,
    height: 481.85,
    top: 910.6,
    left: 599.3,
    rotate: 180,
    layer: 4
  },

  // Base cloud
  {
    id: 'cloud-01-base',
    src: CLOUD_BASE_SRC,
    width: 2906,
    height: 951,
    top: 597,
    left: -433,
    rotate: 180,
    layer: 5
  }
]