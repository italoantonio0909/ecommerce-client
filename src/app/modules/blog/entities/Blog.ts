import { Customer } from '../../authentication/entities/Customer';
type PostStatus = "active" | "inactive"

type CommentStatus = "active" | "inactive" | "banned"

export interface Comment {
  readonly created_by: Customer;
  readonly content: string
  readonly status: CommentStatus
  readonly created_at?: number
  readonly modified_at?: number
}

export interface Post {
  readonly id?: string;
  readonly title: string
  readonly meta_description: string;
  readonly description: string
  readonly image: string
  readonly number_comments: number
  readonly comments: Array<Comment>
  readonly status: PostStatus;
  readonly is_public: boolean
  readonly publish_at?: number
  readonly created_at?: number
  readonly modified_at?: number
}