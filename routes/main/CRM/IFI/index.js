import {Button, Checkbox, Drawer, message} from "antd";
import CustomScrollbars from "../../../../util/CustomScrollbars";
import axios from 'axios';

// import IFIList from "../../../app/components/ifi/IFIList";
import AppModuleHeader from "../../../../app/components/AppModuleHeader";
import AddIFI from "../../../../app/components/ifi/AddIFI";
import IntlMessages from "../../../../util/IntlMessages";
import './index.css';

class IFI extends React.Component {
  constructor() {
    super();
    
    this.state = {
      selectedIFI: null,
      selectedIFIs: 0,
      allIFI: [],
      IFIList: [],
      ifi: {
        name: '',
        legalAddress: '',
        responsiblePersonFullname: '',
        responsiblePersonPosition: '',
        responsiblePersonPhoneNumber: '',
        responsiblePersonEmail: '',
        additionalContactPersonFullname: '',
        additionalContactPersonPosition: '',
        additionalContactPersonPhoneNumber: '',
        additionalContactPersonEmail: '',
      },
      drawerState: false,
      noContentFoundMessage: 'No IFI found in selected folder',
      alertMessage: '',
      showMessage: false,
      selectedSectionId: 1,
      searchUser: '',
      filterOption: 'All IFIs',
      addIFIState: false,
    }
  }

  IFISideBar = (ifi) => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-contacts gx-mr-4"/>
          <span><IntlMessages id="chat.contacts"/></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={this.onAddIFI}>
              <i className="icon icon-add gx-mr-2"/>
              <span>Add New IFI</span>
            </Button>
          </div>
        </CustomScrollbars>
      </div>
    </div>

  };

  onIFISelect = (data) => {
    data.selected = !data.selected;
    let selectedIFIs = 0;
    const IFIList = this.state.IFIList.map(ifi => {
        if (ifi.selected) {
          selectedIFIs++;
        }
        if (ifi.id === data.id) {
          if (ifi.selected) {
            selectedIFIs++;
          }
          return data;
        } else {
          return ifi;
        }
      }
    );
    this.setState({
      selectedIFIs: selectedIFIs,
      IFIList: IFIList
    });

  };

  onAddIFI = () => {
    this.setState({addIFIState: true});
  };

  onIFIClose = () => {
    this.setState({addIFIState: false});
  };
  
  onFilterOptionSelect = (option) => {
    switch (option.name) {
      case 'All contacts': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          IFIList: this.state.allIFI
        });
        break;
      }
      case 'Frequently contacted': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          IFIList: this.state.allIFI.filter((ifi) => ifi.frequently)
        });
        break;
      }
      case 'Starred contacts': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          IFIList: this.state.allIFI.filter((ifi) => ifi.starred)
        });
        break;
      }
      default:
        break;
    }
  };

  onSaveIFI = (data) => {
    let isNew = true;
    const IFIList = this.state.allIFI.map((ifi) => {
      if (ifi.id === data.id) {
        isNew = false;
        return data
      } else {
        return ifi
      }
    });
    if (isNew) {
      IFIList.push(data);
    }
    this.setState({
      alertMessage: isNew ? 'IFI Added Successfully' : 'IFI Updated Successfully',
      showMessage: true,
      IFIList: IFIList,
      allIFI: IFIList
    });
    // this.onFilterOptionSelect(this.state.filterOption);
  };

  onDeleteIFI = (data) => {
    this.setState({
      alertMessage: 'IFI Deleted Successfully',
      showMessage: true,
      allIFI: this.state.allIFI.filter((ifi) => ifi.id !== data.id),
      IFIList: this.state.allIFI.filter((ifi) => ifi.id !== data.id)
    })
  };

  onDeleteSelectedIFI = () => {
    const contacts = this.state.allIFI.filter((ifi) => !ifi.selected);
    this.setState({
      alertMessage: 'IFI Deleted Successfully',
      showMessage: true,
      allIFI: contacts,
      IFIList: contacts,
      selectedIFIs: 0
    })
  };
  
  filterIFI = (ifiName) => {
    const {filterOption} = this.state;
    if (ifiName === '') {
      this.setState({IFIList: this.state.allIFI});
    } else {
      const filterIFI = this.state.allIFI.filter((ifi) =>
        ifi.name.toLowerCase().indexOf(ifiName.toLowerCase()) > -1);
      if (filterOption === 'All contacts') {
        this.setState({IFIList: filterIFI});
      } else if (filterOption === 'Frequently contacted') {
        this.setState({IFIList: filterIFI.filter((ifi) => ifi.frequently)});

      } else if (filterOption === 'Starred contacts') {
        this.setState({IFIList: filterIFI.filter((ifi) => ifi.starred)});
      }
    }
  };
  
  handleRequestClose = () => {
    this.setState({
      showMessage: false,
    });
  };
  
  getAllIFI = () => {
    let IFIList = this.state.allIFI.map((ifi) => ifi ? {
      ...ifi,
      selected: true
    } : ifi);
    this.setState({
      selectedIFIs: IFIList.length,
      allIFI: IFIList,
      IFIList: IFIList
    });
  };
  
  getUnselectedAllIFI = () => {
    let IFIList = this.state.allIFI.map((ifi) => ifi ? {
      ...ifi,
      selected: false
    } : ifi);
    this.setState({
      selectedIFIs: 0,
      allIFI: IFIList,
      IFIList: IFIList
    });
  };

  onAllIFISelect() {
    const selectAll = this.state.selectedIFIs < this.state.IFIList.length;
    if (selectAll) {
      this.getAllIFI();
    } else {
      this.getUnselectedAllIFI();
    }
  }

  updateIFIUser(evt) {
    this.setState({
      searchUser: evt.target.value,
    });
    this.filterIFI(evt.target.value)
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const {ifi, IFIList, addIFIState, drawerState, selectedIFIs, alertMessage, showMessage, noContentFoundMessage} = this.state;
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">

          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.IFISideBar()}
            </Drawer>
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.IFISideBar(ifi)}
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     onClick={this.onToggleDrawer.bind(this)}/>
              </span>

              <AppModuleHeader placeholder="Search ifi" notification={false} apps={false}
                               ifi={this.state.ifi}
                               onChange={this.updateIFIUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">

              <div className="gx-module-box-topbar">
                <Checkbox color="primary" className="gx-icon-btn"
                          indeterminate={selectedIFIs > 0 && selectedIFIs < IFIList.length}
                          checked={selectedIFIs > 0}
                          onChange={this.onAllIFISelect.bind(this)}
                          value="SelectIFI"/>


                {selectedIFIs > 0 &&
                <i className="gx-icon-btn icon icon-trash" onClick={this.onDeleteSelectedIFI.bind(this)}/>}

              </div>
              <CustomScrollbars className="gx-module-content-scroll">
                {IFIList.length === 0 ?
                  <div className="gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : <ContactList IFIList={IFIList}
                                 addFavourite={this.addFavourite.bind(this)}
                                 onIFISelect={this.onIFISelect.bind(this)}
                                 onDeleteIFI={this.onDeleteIFI.bind(this)}
                                 onSaveIFI={this.onSaveIFI.bind(this)}/>
                }


              </CustomScrollbars>

            </div>
          </div>
        </div>

        <AddIFI open={addIFIState} ifi={{
          
        }} onSaveIFI={this.onSaveIFI}
                    onIFIClose={this.onIFIClose} onDeleteIFI={this.onDeleteIFI}/>

        {showMessage && message.info(<span id="message-id">{alertMessage}</span>, 3, this.handleRequestClose)}
      </div>
    )
  }

  async getInitialProps() {
    const res = await fetch('http://127.0.0.1:8000/ifis')
    const IFIList = await res.json()
    console.log('IFIList: ', IFIList);
    return { IFIList }
  }

  componentWillMount() {
    this.setState({
      IFIList: this.props.IFIList,
      allIFI: this.props.IFIList
    })
  }
}

export default IFI;
