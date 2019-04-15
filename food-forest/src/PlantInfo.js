import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

class PlantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const Wrapper = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      width: 18px;
      height: 18px;
      background-color: #000;
      border: 2px solid #fff;
      border-radius: 100%;
      user-select: none;
      transform: translate(-50%, -50%);
      cursor: ${props => (props.onClick ? 'pointer' : 'default')};
      &:hover {
        z-index: 1;
      }
    `;
    return (
      <div>
        <Wrapper onClick={this.toggle}>
          <div style={{color: 'red', size: '3em'}}>{this.props.plant}</div>
        </Wrapper>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.plant}</ModalHeader>
          <ModalBody>
              Name: {this.props.plantInfoProp['Label']} <br />
              Genus: {this.props.plantInfoProp['Genus']} <br />
              Family: {this.props.plantInfoProp['Family']} <br />
              Cousin: {this.props.plantInfoProp['Cousin']} <br />
              Species: {this.props.plantInfoProp['Species']} <br />
              {/* Strata: <br />
              Forest Fruit Type: {} <br />
              Biological Fruit Type: {} <br />
              Culinary Fruit Type: {} <br />
              Fruit Color: {} <br />
              Fruit Edibility: {} <br />
              Bloom Color: {} <br />
              Flower Edibility: {} <br />
              Leaf Edibility: {} <br />
              Bark Edibility: {} <br />
              Seed Edibility: {} <br />
              Overall Toxicity: {} <br /> */}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PlantInfo;
