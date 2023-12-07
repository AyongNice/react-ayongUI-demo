import { useState } from 'react';

// 自定义 Hook，用于处理列表项的展开和折叠
const useExpandableList = (initialList) => {
    const [expandedItems, setExpandedItems] = useState([]);

    const handleExpandItem = (itemId) => {
        // 切换指定项目的展开状态
        setExpandedItems((prevExpandedItems) => {
            if (prevExpandedItems.includes(itemId)) {
                return prevExpandedItems.filter((id) => id !== itemId);
            } else {
                return [...prevExpandedItems, itemId];
            }
        });
    };

    const handleExpandAll = () => {
        // 展开或折叠所有项目
        if (expandedItems.length === initialList.length) {
            setExpandedItems([]);
        } else {
            setExpandedItems(initialList);
        }
    };

    return {
        expandedItems,
        handleExpandItem,
        handleExpandAll,
    };
};

export default useExpandableList;
