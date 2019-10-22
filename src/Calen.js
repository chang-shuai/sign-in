import { Calendar, Badge } from 'antd';
import React from 'react';
import './Calen.css'
import {sessionStore as store} from './storage'
import moment from 'moment';
import check from './Check';

class Calen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.dateCellRender.bind(this)
    }

    getListData = (value, name) => {
      const workbook = store.get('workbook');
      let listData = workbook.map( (item) => {
          item['出勤时间'] = item['出勤时间'].replace(/\s*星期[一二三四五六日]\s*/, ' ')
          return item
      })
      listData = workbook.filter((item) => {
        if (item['姓名']===name) {
          return true
        }
        return false
      })
      
      listData = listData.filter( (item) => {
        const signDate = moment(item['出勤时间'])
        if (signDate.date() === value.date() && signDate.month() === value.month()) {
          return true
        } else {
          return false
        }
      })

      listData = listData.map( (item) => {
        const dateStr = item['出勤时间']
        if (check(dateStr)) {
          return {type: 'success', content: dateStr}
        } else {
          return {type: 'error', content: dateStr}

        }
      })

      return listData || [];
    }
    
    dateCellRender = (value) => {
      const listData = this.getListData(value, this.name);
      return (
        <ul className="events">
          {listData.map(item => (
            <li key={item.content}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))}
        </ul>
      );
    }
  

    render() {
      this.name = this.props.match.params.name;
      return (
          <div>
            <h2>{this.name}</h2>
            <Calendar dateCellRender={this.dateCellRender}  />
          </div>
      )
    }
    
}

export default Calen;