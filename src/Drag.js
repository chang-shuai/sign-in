import React from 'react'
import { Upload, Icon } from 'antd';
import XLSX from 'xlsx'
import  {sessionStore as store}  from './storage'
const { Dragger } = Upload;


class Drag extends React.Component {
  

  render() {
    const props = {
      accept: '.xls,.xlsx',
      name: 'file',
      multiple: false,
      showUploadList: false,	
      customRequest : ({file}) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, {type: 'binary'});
            const sheetNames = workbook.SheetNames; // 工作表名称集合
            const worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
            const wkJson = XLSX.utils.sheet_to_json(worksheet);
            store.set("workbook", wkJson);
            this.props.history.push('/Home');
          };
        reader.readAsBinaryString(file);
        
      },
    };

    return (
      <Dragger {...props}>
          <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">单击或者将文件拖拽到此处上传</p>
          <p className="ant-upload-hint">
            仅支持单个文件
          </p>
      </Dragger>
    )
  }
}

export default Drag;