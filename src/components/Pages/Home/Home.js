import React, { useContext, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../UseContext/UseContext";

const Home = () => {
  const { homeValue } = useContext(UserContext);
  const [table, setTable] = useState(true);
  console.log(homeValue);
  return (
    <div>
      <div className="bg-info">
        <h4 className="text-center">Notice here</h4>
      </div>
      <div>
        <h2>
          Your wallet is connected to <span>{homeValue}</span>, so you are
          requesting {homeValue} Link/ETH.
        </h2>
      </div>
      <div>
        <label htmlFor="">Wallet Address</label>
        <input type="text" placeholder="Your walet Address" />
      </div>
      <div>
        <label htmlFor="">Request Type</label>
        <input type="text" placeholder="20 Test Link" disabled />
        <input type="text" placeholder="0.5 ETH" disabled />
        <button>Send Request</button>
      </div>

      <div>
        <h2>Request History</h2>
        <div>
          <div>
            <button onClick={() => setTable(true)}>
              ETH Transaction History
            </button>
            <button onClick={() => setTable(false)}>
              ETH Transaction History
            </button>
          </div>
          <div>
            {table && (
              <Table
                striped
                bordered
                hover
                size="sm"
                className="overflow-x-auto "
              >
                <thead>
                  <tr>
                    <th>Sr</th>
                    <th>Time</th>
                    <th>Amount</th>
                    <th>Hash</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>12:30 AM</td>
                    <td>487</td>
                    <td>4s8er5s5fe57rjmxnfuewrurks</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>10:30 AM</td>
                    <td>875</td>
                    <td>sf7s7ers4e7r7wser</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>11:30 AM</td>
                    <td>797</td>
                    <td>se4s7er7</td>
                  </tr>
                </tbody>
              </Table>
            )}
            {!table && (
              <Table
                striped
                bordered
                hover
                size="sm"
                className="overflow-x-auto "
              >
                <thead>
                  <tr>
                    <th>Sr</th>
                    <th>Time</th>
                    <th>Amount</th>
                    <th>Hash</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>12:30 AM</td>
                    <td>447</td>
                    <td>4s8er5s5fe57rjmxnfuewrurks</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>10:30 AM</td>
                    <td>875</td>
                    <td>sf7s7ers4e7r7wser</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>11:30 AM</td>
                    <td>797</td>
                    <td>se4s7er7</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
