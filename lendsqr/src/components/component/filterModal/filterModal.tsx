import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import FilterListIcon from '@mui/icons-material/FilterList';
import './filterModal.css'


const FilterModal = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();


  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values: any) => {
        console.log('Filter values:', values);
        setVisible(false);
        form.resetFields();
      })
      .catch((info: any) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  return (
    <>
      <p className='filter-btn' onClick={showModal}>
        <FilterListIcon/>
      </p>
      <Modal
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className ="
        customModal-c"
      >
        
        <Form form={form}>

        <div className='form-field'>
          <Form.Item className='form-o' label="Organization" name="Organization"> </Form.Item>
            <Input placeholder="Select" className='
            customModal'/>
         </div>

          <div className='form-field'>
          <Form.Item label="Username" name="Username"> </Form.Item>
            <Input placeholder="User" className='
              customModal' />
         </div>

          <div className='form-field'>
          <Form.Item label="Email" name="Email"> </Form.Item>
            <Input placeholder="Email" className='
              customModal' />
         </div>
          
          
         <div className='form-field'>
          <Form.Item label="Date" name="Date"> </Form.Item>
            <Input placeholder="Date" className='
              customModal'/>
          </div>

          <div className='form-field'>
            <Form.Item label="Phone Number" name="PhoneNumber"> </Form.Item>
            <Input placeholder="Phone Number" className='
              customModal' />
            </div>

          <div className='form-field'>
           <Form.Item className='form-s' label="Status" name="Status">
           </Form.Item>
            <Input placeholder="Select" className="customModal" />
           
          </div>
        </Form>
        
        <div className='btn-div'>
        <button onClick={handleCancel} className='reset-btn'> Reset</button>
        <button onClick={handleOk} className='filter-button'> Filter</button>
        </div>
      </Modal>
    </>
  );
};

export default FilterModal;
