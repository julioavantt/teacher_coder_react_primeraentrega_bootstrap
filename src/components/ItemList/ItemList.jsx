import { Item } from "../Item/Item"

export const ItemList = ({ list }) => (
	<>
		{!list.length && "Loading"}
		{list.map(item => (
			<Item item={item} />
		))}
	</>
)
