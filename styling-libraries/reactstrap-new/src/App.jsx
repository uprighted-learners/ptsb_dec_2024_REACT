
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Form, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Spinner, Toast, ToastBody, ToastHeader, UncontrolledAlert } from 'reactstrap'
import './App.css'
import { useState } from 'react';

function App() {

  const [isEmailValid, setIsEmailValid] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleToast = () => {
    setShowToast(prev => !prev)
  }

  const toggleModal = () => {
    setShowModal((prev) => !prev)
  }
  return (
    <>
      {/* Buttons */}
      <>
        <Button color="primary">Primary!</Button>
        <Button size="lg" color="warning">Warning!</Button>
        <Button color="danger">Danger!</Button>
        <Button color="success">Success!</Button>
        <Button color="info" outline>Info</Button>
      </>



      {/* Card */}
      <Card
        color="light"
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="Sample"
          src="https://picsum.photos/300/200"
        />
        <CardBody>
          <CardTitle tag="h5">
            Card title
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>


      <Form>
        <FormGroup floating>
          <Input
            valid={isEmailValid}
            invalid={!isEmailValid}
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            required
            onChange={(e) => {
              if (e.target.value.length > 0) {
                setIsEmailValid(e.target.validity.valid);
              } else {
                setIsEmailValid(false)
              }
            }}
          />
          <Label for="exampleEmail">
            Email
          </Label>

          <FormFeedback tooltip valid>
            Sweet! that email works for me!
          </FormFeedback>

          {/* <FormFeedback tooltip invalid> */}
            {/* FIX YOUR EMAIL! */}
          {/* </FormFeedback> */}
        </FormGroup>
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Label for="examplePassword">
            Password
          </Label>
        </FormGroup>

        <Button>
          Submit
        </Button>
      </Form>


      <Toast isOpen={showToast}>
        <ToastHeader toggle={handleToast} icon="primary">
          Toast title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ToastBody>
      </Toast>
      <Button onClick={handleToast}>Click to show Toast!</Button>


      <UncontrolledAlert color="danger">
        I am an alert and I can be dismissed!
      </UncontrolledAlert>

      <Spinner color="primary">
        Loading...
      </Spinner>
      <Spinner color="info" type="grow">
        Loading...
      </Spinner>

      <Button onClick={toggleModal}>Launch Modal</Button>

      <Modal
        isOpen={showModal}
        toggle={toggleModal}
        backdrop={true}
        keyboard={true}
        centered={true}
      >
        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" >
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </>
  )
}

export default App
