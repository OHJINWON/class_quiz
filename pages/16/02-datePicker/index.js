import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';

export default function App () {
    const [string, setString] = useState("")
    const [date, setDate] = useState("")
    const onChange = (date, dateString) => {
        console.log(date, dateString);
        setString(dateString)
        setDate(dateString.substring(0, 7))
      };
    return <>
        <Space direction="vertical">
            <DatePicker onChange={onChange} />
            {
                <>
                <span>{string ? string : ""}</span>
                <span>{date ? date : ""}</span>
                </>
                
                
            }
            {/* <DatePicker onChange={onChange} picker="week" />
            <DatePicker onChange={onChange} picker="month" />
            <DatePicker onChange={onChange} picker="quarter" />
            <DatePicker onChange={onChange} picker="year" /> */}
        </Space>
    </>
}