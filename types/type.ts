export interface Post {
    id: string
    user: {
      name: string
      avatar: string
    }
    image: string
    caption?: string
    location?: string
    timestamp: string
    likes: number
    comments: number
    timeAgo: string
  }