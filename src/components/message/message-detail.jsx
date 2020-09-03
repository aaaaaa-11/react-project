import React from 'react'

const messageList = [
  { id: 1, title: 'message1', content: 'hhh' },
  { id: 2, title: 'message2', content: 'lll' },
  { id: 3, title: 'message3', content: 'aaa' },
  { id: 4, title: 'message4', content: 'ttt' },
]

export default function MessageDetail (props) {
  // 得到请求参数中的id
  const {id} = props.match.params
  // debugger
  const messaege = messageList.find((m) => m.id === Number(id)) // 返回第一个结果为true的数组元素

  return (
    <ul className="msg-detail">
      <li className="msg-d-id">ID: {id}</li>
      <li className="msg-d-title">TITLE: {messaege.title}</li>
      <li className="msg-d-content">CONTENT: {messaege.content}</li>
    </ul>
  )
}