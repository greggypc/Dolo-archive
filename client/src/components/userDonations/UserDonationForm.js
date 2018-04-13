import React from 'react';
import Row from "../grid/Row";
import Col from "../grid/Col";


class UserDonationForm extends React.Component {


  render() {
    return (
     
     <Row>
       <Col size="12">
        <form action="#">
          <div className="input-field">
            <input id="donationItem" type="text" />
            <label for="donationItem">Donation Item</label>
          </div>
          
      <div className="input-field">
        <select className="browser-default">
        <label>Category</label>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        
      </div>
      
       <div className="input-field">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
        </div>
    
        <div className="file-field input-field">
          <div className="btn">
            <span>Upload image</span>
              <input type="file" />
          </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" placeholder="Upload one image file" type="text" />
        </div>
      </div>
        <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
        </button>
      </form>
     </Col>
     </Row>
 
    );
  }
  
 }

 export default UserDonationForm;