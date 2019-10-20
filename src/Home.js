import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import {sessionStore as store} from './storage';
import Show from './Show';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.workbook = store.get('workbook')
        if (!this.workbook) {
            this.state = {isRedirect : true}
        } else {
            this.state = {isRedirect : false}
        }
    }

    outputWorkbook(workbook) {
        var sheetNames = workbook.SheetNames; // 工作表名称集合
        sheetNames.forEach(name => {
            var worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表
            for(var key in worksheet) {
                // v是读取单元格的原始值
                console.log(key, key[0] === '!' ? worksheet[key] : worksheet[key].v);
            }
        });
    }
    componentDidMount() {
        // this.outputWorkbook(this.workbook)
    }

    render() {
        if (this.state.isRedirect) {
            return <Redirect to="/Drag" ></Redirect>
        } else {
            return (
                <div>
                    <Show data={this.workbook}></Show>
                </div>
            )
        }
    }
}

export default Home;