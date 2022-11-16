import { Container } from "./styles"
import { OrdersBoard } from "../OrdersBoard"
import { Order } from "../../types/Order";

const orders: Order[] = [
    {
		"_id": "637427d048c24a248894e1b8",
		"table": "123",
		"status": "WAITING",
		"products": [
			{
				"product": {
					"name": "Pizza 4 queijos",
					"imagePath": "1668473784157-FILME.jpeg",
					"price": 35,
				},
				"quantity": 2,
				"_id": "637427d048c24a248894e1b9"
			},
            {
				"product": {
					"name": "Pizza 55 queijos",
					"imagePath": "1668473784157-FILME.jpeg",
					"price": 35,
				},
				"quantity": 2,
				"_id": "637427d048c24a248894e1b8"
			}
		],
	}
];

export function Orders() {
    return (
        <Container>
            <OrdersBoard 
                icon="⏱"
                title="Fila de espera"
                orders={orders}
            />
            <OrdersBoard 
                icon="👨‍🍳"
                title="Em preparação"
                orders={[]}
            />
            <OrdersBoard 
                icon="✅"
                title="Pronto!"
                orders={[]}
            />
        </Container>   
    )
}