import { useState } from 'react';
import './App.css';
import AddData from './components/AddData';
import ViewData from './components/ViewData';

function App() {

  const [addStudent, setAddStudent] = useState([]);

  const [totalStudent, setTotalStudent] = useState(0);

  const [showTable, setShowTable] = useState(false);

  const addData = (data) => {
    setAddStudent((preData) => {
      return [...preData, data];
    })
    if (totalStudent >= 0) {
      setShowTable(true);
    }
    setTotalStudent(Object.keys(addStudent).length + 1);
  }



  return (
    <>
      <div className="studentattendancedata">
        <div className="row">
          <div className="col left-col">
            <AddData passData={addData} />
          </div>
          <div className="col right-col">
            <div className="right container">
              <h3 className='text-center'>Student Data</h3>
              {showTable ?
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Student Name</th>
                      <th scope="col">Roll Number</th>
                      <th scope="col">Checkin Time</th>
                      <th scope="col">Checkout Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addStudent?.map((val, index) => {
                      return (<ViewData
                        key={index}
                        id={index}
                        name={val.name}
                        roll={val.roll}
                        checkin={val.checkin}
                        checkout={val.checkout}
                      />);
                    })}
                  </tbody>
                </table> :
                <h6 className='text-center' style={{ marginTop: "20px" }}>Please add data</h6>
              }
              <h4 className='total-student' style={{ marginTop: "20px" }}>Total Student: {totalStudent}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
