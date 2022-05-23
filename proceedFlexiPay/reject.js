import React, { Component } from "react";
import Modal from "react-awesome-modal";
import Reason from "./Reason";
export default class Reject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <section>
        <input
          type="button"
          className="text-[#3754a5] border ml-2 text-xl cursor-pointer  border-[#3754a5] p-2.5 rounded "
          value="Reject"
          onClick={() => this.openModal()}
        />
        <Modal
          visible={this.state.visible}
          width="700"
          height="350"
          effect="fadeInLeft"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <form className="px-12 py-8 text-left">
              <h1 className="py-4 text-[#3755a5] text-2xl font-bold border-b mb-4">
                Confirm rejection
              </h1>
              <p className="text-gray-500 font-light ">Reason for approval</p>
              <Reason />

              <button
                type="submit"
                className="mr-4 text-white bg-[#3755a5]  hover:bg-[#3755a5]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Confirm rejection
              </button>

              <button
                onClick={() => this.closeModal()}
                type="button"
                className="text-[#3754a5] border ml-2 text-xl w-1/3 border-[#3754a5] p-2.5 rounded "
              >
                Cancel
              </button>
            </form>
            {/* <button onClick={() => this.closeModal()}>Close</button> */}
          </div>
        </Modal>
      </section>
    );
  }
}
