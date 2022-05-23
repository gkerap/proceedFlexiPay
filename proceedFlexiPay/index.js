import React from "react";
import Approve from "./approve";
import Reject from "./reject";
function ProceedFlexiPay() {
  return (
    <>
      <div className="p-12">
        <button className="flex items-center space-x-2">
          <svg
            className="mr-2"
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.369216 4.869C0.425718 4.811 0.639065 4.563 0.837798 4.359C2.00292 3.076 5.04238 0.976 6.63322 0.335C6.87482 0.232 7.48563 0.014 7.81198 0C8.1247 0 8.4228 0.072 8.70726 0.218C9.06186 0.422 9.34632 0.743 9.50219 1.122C9.60253 1.385 9.7584 2.172 9.7584 2.186C9.91427 3.047 10 4.446 10 5.992C10 7.465 9.91427 8.807 9.78665 9.681C9.77204 9.695 9.61617 10.673 9.44569 11.008C9.13298 11.62 8.52216 12 7.86848 12H7.81198C7.38626 11.985 6.49099 11.605 6.49099 11.591C4.98587 10.949 2.01656 8.952 0.823186 7.625C0.823186 7.625 0.487092 7.284 0.340964 7.071C0.113005 6.765 0 6.386 0 6.007C0 5.584 0.127618 5.19 0.369216 4.869"
              fill="#3754A5"
            />
          </svg>
          Go Back
        </button>
      </div>
      {/* User Details */}
      <div className="px-12 space-y-2">
        <h1 className="text-2xl">Justis Septimus</h1>
        <h2>jus@mail.com</h2>
        <h2>Javascript Developer</h2>
        <div className="flex space-x-8">
          <div className="text-center">
            <h2 className="text-xl font-light">Company Name</h2>
            <h2 className="text-left font-medium text-[#4F4F4F]  text-xl py-2">
              Hotel Capital
            </h2>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-light">Current Salary</h2>
            <h2 className="text-left font-medium text-[#4F4F4F] text-xl py-2">
              N100,000
            </h2>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-light">Withdrawal Limit</h2>
            <h2 className="text-left font-medium text-[#4F4F4F] text-xl py-2">
              30%
            </h2>
          </div>
        </div>

        <div className="border rounded w-1/3 p-4 space-y-4">
          <h1 className="text-2xl font-medium pb-2 text-[#4F4F4F]">
            New Request
          </h1>

          <div>
            <h1 className="text-xl pb-2 font-light">Amount Requested</h1>
            <h1 className="font-medium text-[#4F4F4F] text-xl ">N25,000</h1>
          </div>

          <div>
            <h1 className="text-xl pb-2 font-light">Date Requested</h1>
            <h1 className="font-medium text-[#4F4F4F] text-xl">12/12/2022</h1>
          </div>
          <div className="flex space-x-8 pb-8">
            <Approve />
            <Reject />
          </div>
        </div>
      </div>
      <div className="p-12">
        <h1 className="font-bold text-2xl pb-6">Transactional History</h1>
        <div className="relative overflow-x-auto  w-fill">
          <div className="pb-4 flex items-center">
            <button
              className="border flex  items-center border-[#3754a5] text-gray-700 py-2 px-8 rounded tracking-wide mr-4
                            font-semibold font-display focus:outline-none focus:shadow-outline  
                             "
            >
              <svg
                className="mr-4"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M8.40282 13.2988H2.92322C2.22971 13.2988 1.66675 13.8519 1.66675 14.5333C1.66675 15.2137 2.22971 15.7677 2.92322 15.7677H8.40282C9.09634 15.7677 9.6593 15.2137 9.6593 14.5333C9.6593 13.8519 9.09634 13.2988 8.40282 13.2988Z"
                  fill="#3754A5"
                />
                <path
                  opacity="0.4"
                  d="M18.3334 5.31556C18.3334 4.63512 17.7705 4.08203 17.0779 4.08203H11.5983C10.9048 4.08203 10.3418 4.63512 10.3418 5.31556C10.3418 5.99691 10.9048 6.55 11.5983 6.55H17.0779C17.7705 6.55 18.3334 5.99691 18.3334 5.31556Z"
                  fill="#3754A5"
                />
                <path
                  d="M7.3982 5.31547C7.3982 6.87102 6.1158 8.13184 4.53247 8.13184C2.95007 8.13184 1.66675 6.87102 1.66675 5.31547C1.66675 3.76082 2.95007 2.5 4.53247 2.5C6.1158 2.5 7.3982 3.76082 7.3982 5.31547Z"
                  fill="#3754A5"
                />
                <path
                  d="M18.3335 14.499C18.3335 16.0536 17.0511 17.3145 15.4678 17.3145C13.8854 17.3145 12.6021 16.0536 12.6021 14.499C12.6021 12.9434 13.8854 11.6826 15.4678 11.6826C17.0511 11.6826 18.3335 12.9434 18.3335 14.499Z"
                  fill="#3754A5"
                />
              </svg>
              Filter
            </button>

            <div className="relative my-1 mx-4 ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2  "
                placeholder="Search for items"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-lg text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Last Flexi-pay Request
                </th>
                <th scope="col" className="px-6 py-3">
                  AMount Requested
                </th>
                <th scope="col" className="px-6 py-3">
                  Approval Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Reason
                </th>
                <th scope="col" className="px-6 py-3">
                  Wallet ID
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900   whitespace-nowrap"
                >
                  N0.00
                </th>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4">N0.00</td>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4  ">Visa</td>
              </tr>
              <tr className="bg-white border-b  ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900   whitespace-nowrap"
                >
                  N0.00
                </th>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4">N0.00</td>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4  ">Visa</td>
              </tr>
              <tr className="bg-white border-b  ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900   whitespace-nowrap"
                >
                  N0.00
                </th>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4">N0.00</td>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4  ">Visa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProceedFlexiPay;
