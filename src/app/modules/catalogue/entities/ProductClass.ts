import { Option } from './Option';
export interface ProductClass {
    readonly name: string
    readonly required_shipping: string
    readonly track_stock: boolean
    readonly options: Array<Option>
    readonly created_at?: number
    readonly modified_at?: number
}