import React from "react";
import {Avatar, Input, Modal} from "antd";

import IntlMessages from "../../../../util/IntlMessages";

class AddIFI extends React.Component {
  constructor(props) {
    super(props);

    const {id, thumb, name, legalAddress, responsiblePersonFullname, responsiblePersonPosition, responsiblePersonPhoneNumber, responsiblePersonEmail, additionalContactPersonFullname, additionalContactPersonPosition, additionalContactPersonPhoneNumber, additionalContactPersonEmail, designation, selected, starred, frequently} = props.ifi;
    this.state = {
      id,
      thumb,
      name,
      legalAddress,
      responsiblePersonFullname,
      responsiblePersonPosition,
      responsiblePersonPhoneNumber,
      responsiblePersonEmail,
      additionalContactPersonFullname,
      additionalContactPersonPosition,
      additionalContactPersonPhoneNumber,
      additionalContactPersonEmail,
      designation,
      selected,
      starred,
      frequently
    }
  }

  render() {
    const {onSaveIFI, onIFIClose, open, ifi} = this.props;
    const {id, name, legalAddress, responsiblePersonFullname, responsiblePersonPosition, responsiblePersonPhoneNumber, responsiblePersonEmail, additionalContactPersonFullname, additionalContactPersonPosition, additionalContactPersonPhoneNumber, additionalContactPersonEmail, designation, selected, starred, frequently} = this.state;
    let {thumb} = this.state;
    if (!thumb) {
      thumb = 'https://via.placeholder.com/225x225';
    }
    return (
      <Modal
        title={ifi.name === '' ?
          <IntlMessages id="ifi.addIFI"/> :
          <IntlMessages id="ifi.saveIFI"/>}
        toggle={onIFIClose} visible={open}
        closable={false}
        onOk={() => {
          if (name === '')
            return;
          onIFIClose();
          onSaveIFI(
            {
              'name': name,
              'thumb': thumb,
              'legalAddress': legalAddress,
              'responsiblePersonFullname': responsiblePersonFullname,
              'responsiblePersonPosition': responsiblePersonPosition,
              'responsiblePersonPhoneNumber': responsiblePersonPhoneNumber,
              'responsiblePersonEmail': responsiblePersonEmail,
              'additionalContactPersonFullname': additionalContactPersonFullname,
              'additionalContactPersonPosition': additionalContactPersonPosition,
              'additionalContactPersonPhoneNumber': additionalContactPersonPhoneNumber,
              'additionalContactPersonEmail': additionalContactPersonEmail,
              'designation': designation,
              'selected': selected,
              'starred': starred,
              'frequently': frequently
            });
          this.setState({
            'id': id + 1,
            'name': '',
            'thumb': '',
            'legalAddress': '',
            'responsiblePersonFullname': '',
            'responsiblePersonPosition': '',
            'responsiblePersonPhoneNumber': '',
            'responsiblePersonEmail': '',
            'additionalContactPersonFullname': '',
            'additionalContactPersonPosition': '',
            'additionalContactPersonPhoneNumber': '',
            'additionalContactPersonEmail': '',
            'designation': '',
          })

        }}
        onCancel={onIFIClose}>

        <div className="gx-modal-box-row">
          <div className="gx-modal-box-avatar">
            <Avatar size="large" src={thumb}/>
          </div>

          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <Input
                required
                placeholder="Name"
                onChange={(event) => this.setState({name: event.target.value})}
                defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Address"
                onChange={(event) => this.setState({legalAddress: event.target.value})}
                value={legalAddress}
                margin="normal"/>
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Responsible Person's Fullname"
                onChange={(event) => this.setState({responsiblePersonFullname: event.target.value})}
                value={responsiblePersonFullname}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Responsible Person's Position"
                onChange={(event) => this.setState({responsiblePersonPosition: event.target.value})}
                value={responsiblePersonPosition}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Responsible Person's Phone number"
                onChange={(event) => this.setState({responsiblePersonPhoneNumber: event.target.value})}
                value={responsiblePersonPhoneNumber}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Responsible Person's Email"
                onChange={(event) => this.setState({responsiblePersonEmail: event.target.value})}
                value={responsiblePersonEmail}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Additional Contact Person's Fullname"
                onChange={(event) => this.setState({additionalContactPersonFullname: event.target.value})}
                value={additionalContactPersonFullname}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Additional Contact Person's Position"
                onChange={(event) => this.setState({additionalContactPersonPosition: event.target.value})}
                value={additionalContactPersonPosition}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Additional Contact Person's Phone number"
                onChange={(event) => this.setState({additionalContactPersonPhoneNumber: event.target.value})}
                value={additionalContactPersonPhoneNumber}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Additional Contact Person's Email"
                onChange={(event) => this.setState({additionalContactPersonEmail: event.target.value})}
                value={additionalContactPersonEmail}
                margin="normal"
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddIFI;
