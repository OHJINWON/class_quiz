import React, { useState } from 'react';
import { Flex, Rate } from 'antd';

export default function App () {
    const [value, setValue] = useState(3)
    const desc = ['1', '2', '3', '4', '5']
    
    const handleClick = (newValue) => {
        setValue(newValue)
        alert(newValue)
    }

    // 0에서 다른 값 클릭하면 바로 나와야함
    console.log(value)
    return <>
        <Flex gap="middle" vertical>
            <Rate 
                onChange={handleClick} 
                value={value}
            />
            {
                value ? <span>{`${desc[value - 1]}점`}</span> 
                : null
            }
        </Flex>
    </>
}