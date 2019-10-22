import React from 'react'
import { Redirect } from 'react-router-dom';
import { Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import { sessionStore as store } from './storage'



class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tableData: store.get('workbook')};
    }

    getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`搜索 ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            搜索
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            复位
          </Button>
        </div>
      ),
      filterIcon: filtered => (
        <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
      render: text => (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ),
    });
  
    handleSearch = (selectedKeys, confirm) => {
      confirm();
      this.setState({ searchText: selectedKeys[0] });
    };
  
    handleReset = clearFilters => {
      clearFilters();
      this.setState({ searchText: '' });
    };

    dumpToCalen = () => {
      this.props.history.push()
    };

    render() {
      // const columns = [
      //   {
      //     title: '登记号码',
      //     dataIndex: '登记号码',
      //     key: '登记号码',
      //     render: text => <Button type="link" >{text}</Button>,
      //     // ...this.getColumnSearchProps('登记号码'),
      //   },
      //   {
      //     title: '姓名',
      //     dataIndex: '姓名',
      //     key: '姓名',
      //     render: text => <Link to={{pathname:`/Calen/`+text}} >{text}</Link>,
      //     // ...this.getColumnSearchProps('姓名'),
      //   },
      //   {
      //     title: '出勤时间',
      //     dataIndex: '出勤时间',
      //     key: '出勤时间',
      //     // render: text => 
      //   }
      // ];  

        return (
          <Redirect to='/Calen/常帅'></Redirect>
          // <Table columns={columns} dataSource={this.state.tableData} pagination={{defaultPageSize:40}}></Table>
        )
    }
}

export default Show;