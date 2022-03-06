import { Input, Form, Checkbox , Button} from "antd"
// mapping of our components
const componentMapping = {
  input: Input,
  password: Input.Password,
  checkbox: Checkbox,
}


function FormElement({ component, label, required, name }) {

  
  // dinamically select a component from componentMapping object
  const Component = componentMapping[component]
  return (
   <>
         <Form.Item
    
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 10 }}
      label={label}
      name={name}
      rules={[{ required, message: "Field is required!" }]}
     
    >
        
      <Component />
      
    </Form.Item>
    
   </>
  )
}

export default FormElement;