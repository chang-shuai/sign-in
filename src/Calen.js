import { Calendar, Badge } from 'antd';
import React from 'react';
import './Calen.css'
import {sessionStore as store} from './storage'
import moment from 'moment';

class Calen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.dateCellRender.bind(this)
        this.monthCellRender.bind(this)
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
        return {type: 'success', content: item['出勤时间']}
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
    
    getMonthData = (value) => {
      if (value.month() === 8) {
        return 1394;
      }
    }
    
    monthCellRender = (value) => {
      const num = this.getMonthData(value);
      return num ? (
        <div className="notes-month">
          <section>{num}</section>
          <span>Backlog number</span>
        </div>
      ) : null;
    }

    render() {
      this.name = this.props.match.params.name;
      return (
          <div>
            <h2>{this.name}</h2>
            <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
          </div>
      )
    }
    
}

export default Calen;