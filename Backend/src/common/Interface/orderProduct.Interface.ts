

export interface IOrderProduct{
   
    product: string
    
    order_id: string
    
    quantity: number
   
    price: number

    discount_rate?: number

    discount: boolean

    total_Item: number
} 