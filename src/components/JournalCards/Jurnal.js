import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetElementServices } from "../../services/AxiosGenerator";
import Modal from "react-modal";
import { RentModal } from "../RentModal/RentModal";
Modal.setAppElement("#root");

const Jurnal = () => {
  const [addModal, setAddModal] = React.useState(false);
  const [student, SetStudent] = useState([]);
  const { id } = useParams();
  console.log(student?.user ? student?.user : student);

  const customStyles = {
    content: {
      width: "700px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      zIndex: "11",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  };

  useEffect(() => {
    GetElementServices(`student?id=${id}`, SetStudent);
  }, [id]);

  const date = new Date(student?.user?.scores?.[0]?.createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so we add 1
  const day = date.getDate();
  const allData = `${year} - ${month} - ${day}`;
  console.log(allData);

  return (
    <div className="points">
      <div className="points__inner">
        <div className="points__date">
          <table>
            <thead>
              <tr>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{allData}</td>
              </tr>
              {/* {student?.user?.scores?.map((item) => (
                <tr>{item.createdAt}</tr>
              ))} */}
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Muloqot qilish</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              {student?.user?.scores?.map((item) => (
                <tr>
                  {item.skill === "COMMUNICATION"
                    ? item?.scores?.map((e) => <td>{e}</td>)
                    : ""}
                </tr>
              ))}

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Tanqidiy fikrlash:</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              {student?.user?.scores?.map((item) => (
                <tr>
                  {item.skill === "CRITICAL_THINKING"
                    ? item?.scores?.map((e) => <td>{e}</td>)
                    : ""}
                </tr>
              ))}

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Muammoni hal qilish:</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              {student?.user?.scores?.map((item) => (
                <tr>
                  {item.skill === "PROBLEM_SOLVING"
                    ? item?.scores?.map((e) => <td>{e}</td>)
                    : ""}
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="points__section section">
          <p className="section__title">Yechimlarni qo'llash:</p>
          <table>
            <thead>
              <tr>
                <th>Fikrlarini</th>
                <th>Aktiv</th>
                <th>Og'zaki</th>
                <th>Auditoriyani</th>
                <th>Jamoaviy</th>
              </tr>
            </thead>
            <tbody>
              {student?.user?.scores?.map((item) => (
                <tr>
                  {item.skill === "IMPLEMENTATION"
                    ? item?.scores?.map((e) => <td>{e}</td>)
                    : ""}
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={addModal}
        onRequestClose={() => setAddModal(false)}
        style={customStyles}
      >
        <RentModal isOpen={setAddModal} id={id} />
      </Modal>

      <div className="points__send send">
        <button
          className="send__btn"
          onClick={() => {
            setAddModal(true);
          }}
        >
          Evaluation
        </button>
      </div>
    </div>
  );
};

export default Jurnal;