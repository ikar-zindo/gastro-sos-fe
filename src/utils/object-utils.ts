type Item = Record<string, any>; // Или можно заменить на конкретный интерфейс объекта

export const updateObjectInArray = (
    items: Item[],                // массив объектов
    itemId: any,                  // идентификатор, который может быть любого типа (обычно string или number)
    objPropName: string,          // имя свойства объекта, по которому происходит сравнение
    newObjProps: Partial<Item>    // новые свойства, которые нужно обновить
): Item[] => {
    return items.map(item => {
        if (item[objPropName] === itemId) {
            return {...item, ...newObjProps}; // обновление объекта
        }
        return item;
    });
};

// export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
// 	return items.map(item => {
// 		if (item[objPropName] === itemId) {
// 			return {...item, ...newObjProps}
// 		}
// 		return item;
// 	})
// }