import { Item } from "../Item/Item"

export const ItemList = ({ items }) =>
	!items.length ? (
		<span>Loading</span>
	) : (
		items.map(item => <Item key={item.id} item={item} />)
	)
