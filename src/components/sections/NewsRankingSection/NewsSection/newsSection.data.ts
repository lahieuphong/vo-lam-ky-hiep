export type NewsTabItem = {
  id: string
  label: string
  active?: boolean
}

export type NewsItem = {
  id: number
  title: string
  date: string
}

export const NEWS_TABS: NewsTabItem[] = [
  {
    id: 'tin-tuc',
    label: 'Tin tức',
    active: true
  },
  {
    id: 'su-kien',
    label: 'Sự kiện'
  },
  {
    id: 'tinh-nang',
    label: 'Tính năng'
  },
  {
    id: 'huong-dan',
    label: 'Hướng dẫn'
  }
]

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: 'Thưởng Nhân Thần Bí ở lại từ 08/01',
    date: '07-01-2024'
  },
  {
    id: 2,
    title: 'Cập nhật lộ trình phát triển trong năm 2024',
    date: '07-01-2024'
  },
  {
    id: 3,
    title: '04/01: Bảo trì hệ thống VNGGames Webshop',
    date: '07-01-2024'
  },
  {
    id: 4,
    title: 'Sự kiện Đoán Thạch trở lại, thưởng mới cực đã',
    date: '07-01-2024'
  },
  {
    id: 5,
    title: '04/01: Bảo trì cập nhật các hoạt động mới',
    date: '07-01-2024'
  }
]