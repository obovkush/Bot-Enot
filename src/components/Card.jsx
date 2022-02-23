import React from 'react';
import { Card } from 'antd'
import data from '../data'

const Info = () => {

  React.useEffect(() => {
    let inputEl = document.querySelector('input')
    let cardInfo = document.querySelector('.ant-card-body')


    inputEl.addEventListener('click', function(event) {
      event.preventDefault()
      let selectInput = document.querySelector('.rc-virtual-list-holder-inner')
      let selectInputs = document.querySelectorAll('.ant-select-item-option-content')

      selectInput.addEventListener('click', (event) => {
        event.preventDefault()
    
        for (let i = 0; i < selectInputs.length; i++) {
          if (event.target === selectInputs[i]) {
            cardInfo.innerHTML = data[i].answer
          }
        }
      })
    })
    
    
  }, []);

  return (
    <Card title="Bot answer" bordered={false} >
      <p></p>
    </Card>
  )
}

export default Info
