import { AutoComplete } from 'antd';
import data from '../data';

const options = []
for(let i = 0; i < data.length; i++) {
  options[i] = {value: data[i].question}
}

const Complete = () => (
  
  <AutoComplete
    allowClear
    options={options}
    placeholder="начните вводить вопрос"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

export default Complete
